/**
 * This file defines the the application start point.
 * It contains the main component and also handles dark mode settings.
 */

import React, { useEffect, useState } from "react";
import
{
    enable as enableDarkMode, disable as disableDarkMode, isEnabled as isDarkReaderEnabled,
    auto as followSystemColorScheme, setFetchMethod as darkModeSetFetchMethod
} from "darkreader";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from '@mui/material/styles';

import DefaultPage from "./DefaultPage";
import { APP_THEME } from "./Theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

// This CSS must go below the module imports!
import './styles/App.css';


function App()
{
    const [loaded, setLoaded] = useState(false); // State to track if the app is loaded
    const [darkMode, setDarkMode] = useState(false); // State to track if dark mode is enabled
    const [manualDarkModeTrigger, setManualDarkModeTrigger] = useState(false); // State to track if dark mode was manually triggered

    // Run when the component mounts
    useEffect(() =>
    {
        const setThemeSettings = () =>
        {
            // Enable or disable dark mode if it was set explicitly
            darkModeSetFetchMethod(window.fetch);
            if (localStorage.getItem("darkMode") === "true")
                enableDarkMode();
            else if (localStorage.getItem("darkMode") === "false")
                disableDarkMode();
            else // Otherwise, follow the system color scheme
                followSystemColorScheme();
            setDarkMode(isDarkReaderEnabled());
            setLoaded(true);
            setManualDarkModeTrigger(false); // Reset manual trigger after setting theme
        }

        setThemeSettings();
    }, [manualDarkModeTrigger]);

    // Prevent loading the app until the setup is complete
    if (!loaded)
        return <div className="app" />;

    return (
        <ThemeProvider theme={APP_THEME}>
            <Router>
                <div className="app">
                    <Header
                        darkMode={darkMode}
                        toggleParentDarkMode={() => setManualDarkModeTrigger(true)}
                    />
                    <div className="main-container" id="main-container">
                        <Routes>
                            {/* Fill in more routes here */}
                            <Route path="/privacy" element={<PrivacyPolicy />} />
                            <Route path="/terms" element={<TermsOfService />} />
                            <Route path="/" element={<DefaultPage />} />
                            <Route path="*" element={<Navigate to={"/"} replace />} />
                        </Routes>
                        <Footer darkMode={darkMode} />
                    </div>
                    <ToastContainer 
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={darkMode ? "dark" : "light"}
                    />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
