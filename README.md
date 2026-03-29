# 👕 Wear Now — MERN Stack Shopping App

A full-stack e-commerce web application for buying t-shirts online, built with Node.js, Express, MongoDB, and Vanilla JavaScript.

---

## 📚 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Installation & Setup](#-installation--setup)
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [Developer](#-developer)
- [License](#-license)

---

## 📖 About The Project

Wear Now is a full-stack e-commerce web application designed for online t-shirt shopping. This project was built as part of WebX 2026 to demonstrate full-stack web development skills using the MERN-like stack (MongoDB, Express, Node.js) with Vanilla JavaScript on the frontend.

The application provides a complete online shopping experience — from browsing products to placing orders. Users can register and login securely, add products to their cart, manage quantities, checkout with delivery details, and track their order history.

The UI is designed with a bold and colorful theme, featuring smooth animations and hover effects to deliver a modern and engaging user experience.

### 🎯 Why This Project?
- To learn and implement full-stack web development
- To understand REST API design and database management
- To build a real-world application with user authentication
- To practice frontend development with JavaScript and CSS
- To gain hands-on experience with MongoDB Atlas cloud database

---

## ✨ Features

- 🔐 User Authentication — Register & Login with bcrypt password hashing
- 🛒 Add to Cart — Easily add products to cart
- 🔢 Cart Count — Live item count in navbar
- ➕➖ Quantity Control — Increase or decrease quantity in cart
- 💳 Checkout Page — Delivery address and payment method selection
- 📦 Order History — View all previous orders
- 🚚 Track Order — View order details in a modal popup
- ❌ Cancel Order — Cancel any confirmed order
- 🔍 Search Bar — Search products by color or style
- 🎨 Bold & Colorful UI — Professional design with smooth animations
- 🔴 Logout — Secure session management with localStorage

---

## 🛠️ Tech Stack

### Frontend
| Technology | Usage |
|------------|-------|
| HTML5 | Page Structure |
| CSS3 | Styling, Animations, Grid Layout |
| JavaScript | Logic and DOM Manipulation |
| Fetch API | Communicate with Backend |
| localStorage | Save User Session |

### Backend
| Technology | Usage |
|------------|-------|
| Node.js | Server Runtime Environment |
| Express.js | REST API Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | MongoDB Object Data Modeling |
| bcrypt | Password Hashing and Security |
| CORS | Cross Origin Resource Sharing |

---

## 📁 Project Structure
```
wear-now-ecommerce/
├── 432_website/           # Frontend Files
│   ├── mainpage.html      # Home Page
│   ├── women.html         # Women Products Page
│   ├── men.html           # Men Products Page
│   ├── cart.html          # Shopping Cart Page
│   ├── checkout.html      # Checkout Page
│   ├── orderhistory.html  # Order History Page
│   ├── login.html         # Login Page
│   ├── regeiter.html      # Register Page
│   ├── shop.css           # Main Stylesheet
│   ├── shop.js            # Cart and Search Logic
│   └── main.css           # Home Page Styles
│
└── backend/               # Backend Files
    └── server.js          # Express Server and API Routes
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /register | Register a new user |
| POST | /login | Login existing user |
| GET | /cart/:userId | Get all cart items |
| POST | /add-to-cart | Add item to cart |
| PUT | /update-quantity/:id | Update item quantity |
| DELETE | /remove/:id | Remove item from cart |
| POST | /save-order | Place a new order |
| GET | /orders/:userId | Get order history |
| GET | /track-order/:id | Track a specific order |
| DELETE | /cancel-order/:id | Cancel an order |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/your-username/wear-now-ecommerce.git
cd wear-now-ecommerce
```

**2. Install dependencies**
```bash
cd backend
npm install
```

**3. Start the server**
```bash
node server.js
```

**4. Open the website**
```
Open 432_website/mainpage.html in your browser
Or use Live Server extension in VS Code
```

---

## 🗄️ Database Schema

### User
```json
{
  "name": "String",
  "email": "String",
  "password": "String (bcrypt hashed)"
}
```

### Cart
```json
{
  "userId": "String",
  "image": "String",
  "price": "String",
  "quantity": "Number"
}
```

### Order
```json
{
  "userId": "String",
  "items": "Array",
  "total": "String",
  "address": "String",
  "payment": "String",
  "status": "String (default: Confirmed)",
  "date": "Date"
}
```

---

## 📸 Screenshots

> Add screenshots of your website here
<img width="1301" height="631" alt="image" src="https://github.com/user-attachments/assets/859abfff-4a9c-4b32-ae50-1878aa438283" />

<img width="1284" height="612" alt="image" src="https://github.com/user-attachments/assets/eb335936-f3da-452b-865e-e4f80a342d0b" />

<img width="1311" height="547" alt="image" src="https://github.com/user-attachments/assets/9a9c719f-45ed-4c58-bf3e-6bfdeaf90962" />

<img width="1225" height="455" alt="image" src="https://github.com/user-attachments/assets/f3a9f87c-a136-4392-adf2-474e3edf963a" />

<img width="1040" height="610" alt="image" src="https://github.com/user-attachments/assets/01618bd1-1877-4bf7-b795-0db86dd35f08" />

<img width="933" height="629" alt="image" src="https://github.com/user-attachments/assets/232ad0f6-a83a-4a99-a74c-c24b2addbbcb" />

<img width="745" height="629" alt="image" src="https://github.com/user-attachments/assets/7ab3359b-0f49-4fb4-b950-b2a46d266142" />


## 👩‍💻 Developer

**Sakshi Bang**
- 🎓 WebX 2026 Project
- 💻 Full Stack Developer

---

## 📄 License

Copyright © 2026 Sakshi Bang. All rights reserved.
This project is not open source. No part of this code may be copied,
modified, or distributed without permission from the author.
