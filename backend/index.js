const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const { service, userControl, societyControl, complaintControl } = require('./routes/routes');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// Use CORS middleware
app.use(cors());

// Make incoming data in JSON format
app.use(express.json());

// Configure body parser for larger requests


// Connect to MongoDB
main()
  .then(() => {
    console.log('Connection Successful!');
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_LINK);
}

// Define routes
app.use('/services', service);
app.use('/user', userControl);
app.use('/society', societyControl);
app.use('/complaint', complaintControl);

// Define a basic route
app.get('/', (req, res) => {
  res.send('HOME PAGE');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
