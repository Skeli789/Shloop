#!/bin/bash

# Ensure we're in the correct directory
cd "$(dirname "$0")"

echo "Starting Shloop application..."
echo "Working directory: $(pwd)"

TERMINAL_PIDS=()

# Function to check if a port is in use
is_port_in_use() {
    local port=$1
    if command -v netstat &> /dev/null; then
        netstat -tuln | grep -q ":$port "
    elif command -v ss &> /dev/null; then
        ss -tuln | grep -q ":$port "
    elif command -v lsof &> /dev/null; then
        lsof -i :$port &> /dev/null
    else
        # Fallback: try to connect to the port
        (echo > /dev/tcp/localhost/$port) &>/dev/null
    fi
}

# Function to check if services are already running
check_services() {
    local client_running=false
    local server_running=false

    if is_port_in_use 3000; then
        echo "✓ Client service already running on port 3000"
        client_running=true
    fi

    if is_port_in_use 3001; then
        echo "✓ Server service already running on port 3001"
        server_running=true
    fi

    if [[ "$client_running" == true && "$server_running" == true ]]; then
        echo "Both services are already running!"
        return 0  # Both services running
    elif [[ "$client_running" == true ]]; then
        return 1  # Only client running
    elif [[ "$server_running" == true ]]; then
        return 2  # Only server running
    else
        return 3  # Neither service running
    fi
}

# Function to detect the terminal emulator and open new windows/tabs minimized
open_terminal() {
    local command="$1"
    local title="$2"
    local pid

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        osascript -e "tell app \"Terminal\" to do script \"cd $(pwd) && $command\""
    elif command -v gnome-terminal &> /dev/null; then
        # GNOME Terminal - use exec bash to keep terminal open
        gnome-terminal --title="$title" --window --minimize --working-directory="$(pwd)" -- bash -c "$command; exec bash" &
        pid=$!
    elif command -v xterm &> /dev/null; then
        # xterm (no native minimize, use -iconic)
        xterm -title "$title" -iconic -e bash -c "cd $(pwd) && $command; exec bash" &
        pid=$!
    elif command -v konsole &> /dev/null; then
        # KDE Konsole (try to minimize with kstart/kstart5 if available)
        if command -v kstart5 &> /dev/null && kstart5 --help 2>&1 | grep -q -- '--iconify'; then
            kstart5 --iconify konsole --title "$title" --workdir "$(pwd)" -e bash -c "$command; exec bash" &
            pid=$!
        elif command -v kstart &> /dev/null && kstart --help 2>&1 | grep -q -- '--iconify'; then
            kstart --iconify konsole --title "$title" --workdir "$(pwd)" -e bash -c "$command; exec bash" &
            pid=$!
        else
            konsole --title "$title" --workdir "$(pwd)" -e bash -c "$command; exec bash" &
            pid=$!
        fi
    elif command -v xfce4-terminal &> /dev/null; then
        # XFCE Terminal (no native minimize, use --hide-menubar as a workaround)
        xfce4-terminal --title="$title" --hide-menubar --working-directory="$(pwd)" -e "bash -c '$command; exec bash'" &
        pid=$!
    else
        echo "Warning: Could not detect terminal emulator."
        echo "Please run these commands manually in separate terminals:"
        echo "1. cd $(pwd) && yarn serve"
        echo "2. cd $(pwd)/server && yarn start"
        exit 1
    fi

    # Track PID if set (not on macOS)
    if [[ -n "$pid" ]]; then
        TERMINAL_PIDS+=($pid)
    fi
}

# Function to open browser at localhost:3000
open_browser() {
    local delay=${1:-1}  # Default 1 second delay, can be overridden
    sleep $delay  # Give time for servers to start
    local url="http://localhost:3000"
    if command -v xdg-open &> /dev/null; then
        xdg-open "$url" &
    elif command -v gnome-open &> /dev/null; then
        gnome-open "$url" &
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        open "$url"
    else
        echo "Please open $url in your browser."
    fi
}

echo ""
echo "Checking if services are already running..."

check_services
service_status=$?

case $service_status in
    0)
        echo "Both client and server are already running!"
        echo "Skipping terminal launch."
        ;;
    1)
        echo "Client is running, starting server..."
        open_terminal "cd server && yarn start" "Shloop Server"
        sleep 1
        ;;
    2)
        echo "Server is running, starting client..."
        open_terminal "yarn serve" "Shloop Client"
        sleep 1
        ;;
    3)
        echo "Starting both services..."
        echo "Starting client..."
        open_terminal "yarn serve" "Shloop Client"
        sleep 1  # Give first terminal time to start
        echo "Starting server..."
        open_terminal "cd server && yarn start" "Shloop Server"
        sleep 1
        ;;
esac

echo "Opening http://localhost:3000 in your browser..."
if [[ $service_status -eq 0 ]]; then
    # Services already running, open browser immediately
    open_browser 1
else
    # Services starting, give them more time
    open_browser 4
fi

echo ""
if [[ $service_status -eq 0 ]]; then
    echo "Application is already running!"
else
    echo "Services are starting in separate terminals."
fi
echo "The application will continue running in the background."
echo "You can close this notification."

# Create a notification or show status
if command -v notify-send &> /dev/null; then
    if [[ $service_status -eq 0 ]]; then
        notify-send "Shloop" "Application is already running! Opening browser..." --icon="/home/jonah/Documents/GitHub/Shloop/public/ShloopIcon.png"
    else
        notify-send "Shloop" "Application started successfully! Opening browser..." --icon="/home/jonah/Documents/GitHub/Shloop/public/ShloopIcon.png"
    fi
fi

# Keep the script running but don't require user input when launched from desktop
if [[ -t 0 ]]; then
    # Running in terminal - wait for user input
    echo "Press Enter to exit this script (the app will continue running)."
    read
else
    # Running from desktop - just sleep briefly then exit
    sleep 2
fi
