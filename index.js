// Import Express
const express = require("express");

// Import CORS
const cors = require("cors");

// create an express application
const app = express();
app.use(cors());
app.use(express.json());

// define a port
const PORT = 3050;


// Data
let snacks = 
[
  {
    "id": 1,
    "name": "Chips",
    "description": "Crunchy and salty potato chips.",
    "price": 2.99,
    "category": "Salty Snacks",
    "inStock": true
  },
  {
    "id": 2,
    "name": "Chocolate Bar",
    "description": "Rich and creamy milk chocolate bar.",
    "price": 1.49,
    "category": "Sweet Snacks",
    "inStock": true
  },
  {
    "id": 3,
    "name": "Popcorn",
    "description": "Buttery and fluffy popcorn.",
    "price": 3.49,
    "category": "Salty Snacks",
    "inStock": false
  },
  {
    "id": 4,
    "name": "Gummy Bears",
    "description": "Colorful and chewy gummy bears.",
    "price": 2.19,
    "category": "Sweet Snacks",
    "inStock": true
  },
  {
    "id": 5,
    "name": "Pretzels",
    "description": "Crispy and twisted pretzels.",
    "price": 2.79,
    "category": "Salty Snacks",
    "inStock": true
  },
  {
    "id": 6,
    "name": "Granola Bar",
    "description": "Healthy and crunchy granola bar.",
    "price": 1.99,
    "category": "Healthy Snacks",
    "inStock": true
  },
  {
    "id": 7,
    "name": "Fruit Snacks",
    "description": "Sweet and fruity gummy snacks.",
    "price": 2.49,
    "category": "Sweet Snacks",
    "inStock": false
  },
  {
    "id": 8,
    "name": "Nuts Mix",
    "description": "A mix of roasted and salted nuts.",
    "price": 4.99,
    "category": "Healthy Snacks",
    "inStock": true
  },
  {
    "id": 9,
    "name": "Energy Bar",
    "description": "High-protein energy bar.",
    "price": 2.59,
    "category": "Healthy Snacks",
    "inStock": true
  },
  {
    "id": 10,
    "name": "Rice Crackers",
    "description": "Light and crispy rice crackers.",
    "price": 3.19,
    "category": "Healthy Snacks",
    "inStock": false
  }
]

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
  const PORT = process.env.PORT || 3050;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  