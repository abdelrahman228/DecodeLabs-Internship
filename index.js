const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 150 }
];

app.get('/products', (req, res) => {
    res.status(200).json({
        success: true,
        data: products
    });
});

app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({
            success: false,
            message: "Please provide both name and price for the product."
        });
    }
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };
    products.push(newProduct);
    res.status(201).json({
        success: true,
        message: "Product added successfully!",
        data: newProduct
    });
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to DecodeLabs Backend API!" });
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});