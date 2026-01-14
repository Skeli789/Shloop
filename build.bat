@echo off
echo Starting installation process...

REM Check if yarn is installed globally
echo Checking for yarn installation...
where yarn >nul 2>&1
if %errorlevel% neq 0 (
    echo Yarn not found. Installing yarn globally...
    call npm install --global yarn
    if %errorlevel% neq 0 (
        echo Failed to install yarn. Please check your npm installation.
        pause
        exit /b 1
    )
    echo Yarn installed successfully.
) else (
    echo Yarn is already installed.
)

REM Install dependencies in root directory
echo.
echo Installing root dependencies...
call yarn install
if %errorlevel% neq 0 (
    echo Failed to install root dependencies.
    pause
    exit /b 1
)

REM Install dependencies in server directory
echo.
echo Installing server dependencies...
cd server
if %errorlevel% neq 0 (
    echo Failed to navigate to server directory.
    pause
    exit /b 1
)

call yarn install
if %errorlevel% neq 0 (
    echo Failed to install server dependencies.
    pause
    exit /b 1
)

REM Build the app
echo.
echo Building the app...
cd ..
call yarn build
if %errorlevel% neq 0 (
    echo Failed to build the app.
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
pause
