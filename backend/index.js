const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
