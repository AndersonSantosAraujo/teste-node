// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// Connection
const port = 3000;
app.listen(port, () => console.log("Listening to port 3000"));
