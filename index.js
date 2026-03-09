const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET all restaurants
app.get('/restaurants', (req, res) => {
  res.json([
    { id: 1, name: "Pizza Palace", cuisine: "Italian" },
    { id: 2, name: "Burger Barn", cuisine: "American" },
    { id: 3, name: "Sushi Station", cuisine: "Japanese" }
  ]);
});

// GET menu by restaurant ID
app.get('/restaurants/:id/menu', (req, res) => {
  res.json([
    { item: "Margherita Pizza", price: 12.99 },
    { item: "Pepperoni Pizza", price: 14.99 }
  ]);
});

// GET all orders
app.get('/orders', (req, res) => {
  res.json([
    { orderId: 101, customer: "Alice", status: "Delivered" },
    { orderId: 102, customer: "Bob", status: "Pending" }
  ]);
});

app.listen(PORT, () => {
  console.log(`FoodExpress API running on port ${PORT}`);
});