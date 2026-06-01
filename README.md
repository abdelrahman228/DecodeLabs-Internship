# 🛒 Products REST API — DecodeLabs Backend Task 1
 
A beginner-friendly Node.js REST API that performs basic CRUD operations on an in-memory products list. Built during the **Industrial Training Program (Batch: 2026)** powered by **DecodeLabs**.
 
---
 
## 📖 Table of Contents
 
- [Tech Stack](#-tech-stack)
- [Core Features](#-core-features)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Notes](#-notes)
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework & routing |
 
---
 
## 🎯 Core Features
 
- **Get All Products** — Returns the full list of available products.
- **Add a Product** — Accepts a name and price, validates the input, and adds the new product to the list.
- **Input Validation** — Rejects requests missing required fields with a clear error message.
- **Auto-increment ID** — Each new product gets an ID automatically based on the current list size.
---
 
## 🧠 How It Works
 
1. **Products are stored in memory** — The data lives in a JavaScript array inside the server. No database is involved.
2. **GET /products** — Returns the full products array as a JSON response.
3. **POST /products** — Validates that both `name` and `price` are provided, creates a new product object with an auto-generated ID, pushes it to the array, and returns the new product.
---
 
## 📁 Project Structure
 
```
task-1/
├── index.js       # Express app — all routes and server logic
└── package.json   # Project metadata & dependencies
```
 
---
 
## ⚙️ Installation & Setup
 
### 1. Clone the repository
```bash
git clone https://github.com/abdelrahman228/Task-1-Abdelrahman-Mohammed-Eid.git
cd Task-1-Abdelrahman-Mohammed-Eid
```
 
### 2. Install dependencies
```bash
npm install
```
 
### 3. Start the server
```bash
node index.js
```
 
The server will start at `http://localhost:3000`.
 
---
 
## 📡 API Endpoints
 
### 🔓 Public Routes
 
| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Welcome message | — |
| GET | `/products` | Get all products | — |
| POST | `/products` | Add a new product | `{ "name", "price" }` |
 
---
 
#### Get All Products — Example Response
```json
{
    "success": true,
    "data": [
        { "id": 1, "name": "Laptop", "price": 1200 },
        { "id": 2, "name": "Smartphone", "price": 800 },
        { "id": 3, "name": "Headphones", "price": 150 }
    ]
}
```
 
---
 
#### Add Product — Example Request
```json
{
    "name": "Keyboard",
    "price": 75
}
```
 
#### Add Product — Example Response
```json
{
    "success": true,
    "message": "Product added successfully!",
    "data": {
        "id": 4,
        "name": "Keyboard",
        "price": 75
    }
}
```
 
#### Missing Fields — Error Response
```json
{
    "success": false,
    "message": "Please provide both name and price for the product."
}
```
 
---
 
## 📝 Notes
 
- **Data is stored in-memory only** — the products list resets on every server restart. This is intentional for demo purposes.
- No authentication is required — all routes are public.
- The default products list contains 3 items: Laptop, Smartphone, and Headphones.
---
 
*Powered by DecodeLabs Engineering Standards. Batch 2026 🚀*
