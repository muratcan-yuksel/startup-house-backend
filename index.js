const express = require("express");
const app = express();
const connectDB = require("./db/connect.js");
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());

//import routes
const items = require("./routes/items.js");
//route middleware
app.use("/api/v1/items", items);

const port = 3001;

app.get("/", (req, res) => res.send("Hello World!"));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
