@echo off
echo Starting the application...

echo.
echo Starting client...
start "Client" cmd /k "yarn serve"

echo.
echo Starting server...
start "Server" cmd /k "cd server && yarn start"

echo.
echo Both client and server are starting in separate windows.

REM Wait for both client and server to be reachable before opening browser
set "CLIENT_URL=http://localhost:3000"
set "SERVER_URL=http://localhost:3001/api/data"

echo.
echo Waiting for client (%CLIENT_URL%) and server (%SERVER_URL%) to become available...

:wait_loop
REM Check client
powershell -NoProfile -Command "try{ Invoke-WebRequest -Uri '%CLIENT_URL%' -UseBasicParsing -TimeoutSec 2 | Out-Null; exit 0 } catch { exit 1 }"
if %errorlevel% neq 0 (
    timeout /t 1 /nobreak >nul
    echo Client not ready yet...
    goto wait_loop
)

REM Check server
powershell -NoProfile -Command "try{ Invoke-WebRequest -Uri '%SERVER_URL%' -UseBasicParsing -TimeoutSec 2 | Out-Null; exit 0 } catch { exit 1 }"
if %errorlevel% neq 0 (
    timeout /t 1 /nobreak >nul
    echo Server not ready yet...
    goto wait_loop
)

echo Both client and server are available. Opening browser...
start "" "%CLIENT_URL%"
