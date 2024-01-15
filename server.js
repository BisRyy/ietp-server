const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Log all requests
app.use(morgan('dev'));

// Parse request body
app.use(bodyParser.json());

// Endpoint to capture requests
app.all('/ietp', (req, res) => {
  console.log(`Received ${req.method} request to /your-endpoint`);
  console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body);

  // Handle the request as needed

  res.status(200).send('Request captured successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

