const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').Server(app);
const path = require('path');
const { StatusCode } = require('status-code-enum');
require('dotenv').config({ path: __dirname + '/.env' });

const PORT = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '..', 'build');

app.use(cors()); // Comment for production server
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(buildPath)); // Uncomment for production server

// Start the server only if this file is run directly
if (require.main === module)
{
    http.listen(PORT, () =>
    {
        console.log(`Shloop server listening on ${PORT}`);
    });
}


// API Endpoints //

/**
 * Sample API endpoint to test server functionality
 * @route GET /api/data
 * @returns {Object} 200 - Success message
 */
app.get('/api/data', async (req, res) =>
{
    res.status(StatusCode.SuccessOK).send({ message: 'API is working!' });
});

// Add more endpoints here as needed


// Production Server Routing //

// Needed so routing works correctly.
// Uncomment for production server
/**
 * Endpoint: /*
 * @route GET /*
 * @returns {File} index.html - The main HTML file for the React app
 */
/*app.get('/{*splat}', function (req, res)
{
    res.sendFile(path.join(buildPath, "index.html"));
});*/

module.exports = { app, http };
