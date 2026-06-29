const express = require('express');
const router = express.Router();
const { StatusCode } = require('status-code-enum');


/**
 * Sample API endpoint to test server functionality
 * @route GET /api/data
 * @returns {Object} 200 - Success message
 */
router.get('/data', async (req, res) =>
{
    res.status(StatusCode.SuccessOK).send({ message: 'API is working!' });
});

// Add more endpoints here as needed

module.exports = router;
