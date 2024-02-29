// importing required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {service, userControl, societyControl} = require("./routes/routes");
const cors = require("cors");

// requiring ENV folder (environment variables)
require("dotenv").config();

// making incoming data as in json format
app.use(express.json())
app.use(cors())

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

app.use(cors());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.use("/services", service);
app.use("/user", userControl);
app.use("/society", societyControl);

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
