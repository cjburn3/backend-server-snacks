// Import Express
const express = require("express");


// Import CORS
const cors = require("cors");


// create an express application
const app = express();
app.use(cors());
app.use(express.json());


// define a port
const PORT = 4000;
