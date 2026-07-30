const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const path = require('path');
require('dotenv').config({ path: __dirname + '/.env' });

const defaultRouter = require('./endpoints/default');
// Import more endpoint routers here as needed

const PORT = process.env.PORT || 3001;
const buildPath = path.join(__dirname, '..', 'build');

app.use(cors()); // Comment for production server
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(buildPath)); // Uncomment for production server

app.use('/api/default', defaultRouter);
// Add more endpoint routers here as needed

// Start the server only if this file is run directly
if (require.main === module)
{
    http.listen(PORT, () =>
    {
        console.log(`Shloop server listening on ${PORT}`);
    });
}

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
