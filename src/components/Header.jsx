/**
 * This file defines the Header component.
 * It is used to display a header at the top of the page.
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DarkModeButton from "../subcomponents/DarkModeButton";

import "../styles/HeaderFooter.css";


/**
 * Represents the Header component.
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.darkMode - Indicates if dark mode is enabled
 * @param {Function} props.toggleParentDarkMode - Function to toggle dark mode in the parent component.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({ darkMode, toggleParentDarkMode }) =>
{
    const navigate = useNavigate();

    const handleLogoClick = () =>
    {
        navigate('/');
    };

    return (
        <div className="header">
            <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <h2 className="logo-text">Shloop</h2>
            </div>
            <div className="buttons">
                <DarkModeButton darkMode={darkMode}
                                toggleParentDarkMode={toggleParentDarkMode} />
            </div>
        </div>
    );
}

export default Header;
