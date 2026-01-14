/**
 * This file defines the DarkModeButton component.
 * It is used to turn dark mode for the site on and off.
 */

import React, { useState, useTransition, useEffect } from 'react';
import { IconButton, Tooltip, CircularProgress } from '@mui/material';

import { MdSunny, MdModeNight } from 'react-icons/md';


/**
 * Represents the DarkModeButton component.
 * @constructor
 * @param {boolean} props.darkMode - Indicates if dark mode is enabled.
 * @param {Function} props.toggleParentDarkMode - Function to toggle dark mode in the App component.
 * @returns {JSX.Element} The rendered DarkModeButton component.
 */
const DarkModeButton = ({ darkMode, toggleParentDarkMode }) =>
{
    const [loading, setLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Clear loading state once transition finishes
    useEffect(() => {
        if (!isPending) setLoading(false);
    }, [isPending]);

    /**
     * Toggles dark mode.
     */
    function toggleDarkMode()
    {
        const shouldUseLoadingSymbol = !darkMode; // Only show loading symbol when switching to dark mode, as it takes longer
        const toggleFunc = () =>
        {
            // Save in local storage
            localStorage.setItem("darkMode", !darkMode);

            // Trigger the useEffect in the App component
            toggleParentDarkMode();
        }

        if (shouldUseLoadingSymbol)
        {
            setLoading(true);
            startTransition(toggleFunc);
        }
        else
            toggleFunc(); // No loading symbol needed when switching to light mode since it's much faster
    }

    const size = 42;
    const id = "dark-mode-button";
    const tooltip = (darkMode) ? "Light Mode" : "Dark Mode";

    return (
        <Tooltip title={tooltip} placement="bottom" arrow enterTouchDelay={0} >
            <IconButton id={id} data-testid={id}
                className="button"
                aria-label="Toggle Dark Mode"
                onClick={toggleDarkMode}
                disabled={loading}>
                {loading ? (
                    <CircularProgress size={size} />
                ) : (
                    darkMode ? <MdSunny size={size} /> : <MdModeNight size={size} />
                )}
            </IconButton>
        </Tooltip>
    );
}

export default DarkModeButton;
