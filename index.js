const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const pepoleRouter = require("./router/people");

require("dotenv").config();

mongoose // eslint-disable-next-line no-undef
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("ERROR", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use(pepoleRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-undef
  console.log(`APP ${process.env.PORT} start work`)
);
