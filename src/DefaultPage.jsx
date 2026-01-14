/**
 * This file defines the DefaultPage component.
 * It contains the main editor for the text and handles the translation box display.
 */

import React from 'react';

import "./styles/DefaultPage.css";

/**
 * Represents the DefaultPage component.
 * @component
 * @returns {JSX.Element} The rendered Mai component.
 */
const DefaultPage = () =>
{
    return (
        <div className="default-page default-container" id="default-page" data-testid="default-page">
            <div>
                Hello, world!
            </div>
            <div>
                Replace this with the actual content.
            </div>
        </div>
    );
}

export default DefaultPage;
