const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const data = require("./excelService");

env.config();

const app = express();

app.use(cors());

// console.log(excelService);

app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(JSON.stringify(data));
});

// listen
app.listen(8000, () => {
  console.log("Server running on port: 8000");
});
