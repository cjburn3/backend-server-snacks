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






// create a simple route
app.get("/items", (request, response, next) => {
    response.json (snacks);
  });
  
// GET /items/:id: Retrieves a specific snack by its ID
  app.get("/items/:id", (request, respond, next) => {
    const snack = snacks.find(s => s.id === parseInt(request.params.id));
    if (!snack) return next(); // 404 if not found
    response.json(snack);
  });
    
// POST /items: Adds a new snack to the list
  app.post("/items", (request, response) => {
    const newSnack = {
      id: snacks.length + 1,
      ...request.body
    };
    snacks.push(newSnack);
    response.status(201).json(newSnack);
  });

// Middleware for handling 404 errors
app.use((request, response) => {
    response.status(404).json({ error: "Not Found" });
  });
  
// Centralized error handling middleware
  app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(500).json({ error: "Something went wrong!" });
  });
  
// Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  