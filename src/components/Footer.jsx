/**
 * This file defines the Footer component.
 * It is used to display a footer at the bottom of the page.
 */

import React from "react";
import { Link } from "react-router-dom";

import packageJson from '../../package.json';

import "../styles/HeaderFooter.css";

const CREATED_YEAR = 2026;


/**
 * Represents the Footer component.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () =>
{
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="logo">
                    &copy; {CREATED_YEAR}{(currentYear > CREATED_YEAR ? ` - ${currentYear}` : "")} Shloop v{packageJson.version}
                </div>
                <div className="footer-links">
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                    <span className="footer-separator">|</span>
                    <Link to="/terms" className="footer-link">Terms of Service</Link>
                </div>
                <div className="author">
                    <span>Created by {packageJson.author}</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
