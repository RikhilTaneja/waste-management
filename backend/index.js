const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const { service, userControl, societyControl, complaintControl, paymentRouter } = require('./routes/routes');

const app = express();

// Configure body parser for larger requests
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// Use CORS middleware
app.use(cors());

// Make incoming data in JSON format
app.use(express.json());

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_LINK);
}

app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/services', service);
app.use('/user', userControl);
app.use('/society', societyControl);
app.use('/complaint', complaintControl);
app.use('/pay',paymentRouter)

// Define a basic route
app.get('/', (req, res) => {
  res.send('HOME PAGE');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
