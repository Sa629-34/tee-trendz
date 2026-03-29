# 👕 TEE-TRENDZ

A full-stack e-commerce web application for buying t-shirts online, built with Node.js, Express, MongoDB, and Vanilla JavaScript.



## 🚀 Live Demo
> Run locally using instructions below

## 📖 About The Project

Wear Now is a full-stack e-commerce web application designed for 
online t-shirt shopping. This project was built as part of WebX 2026 
to demonstrate full-stack web development skills using the MERN-like 
stack (MongoDB, Express, Node.js) with Vanilla JavaScript on the frontend.

The application provides a complete online shopping experience — from 
browsing products to placing orders. Users can register and login 
securely, add products to their cart, manage quantities, checkout with 
delivery details, and track their order history.

The UI is designed with a bold and colorful theme, featuring smooth 
animations and hover effects to deliver a modern and engaging user 
experience.

### 🎯 Why This Project?
- To learn and implement full-stack web development
- To understand REST API design and database management
- To build a real-world application with user authentication
- To practice frontend development with JavaScript and CSS
- To gain hands-on experience with MongoDB Atlas cloud database

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
<img width="1323" height="631" alt="image" src="https://github.com/user-attachments/assets/792715b2-f577-4311-8245-3dee2084ce12" />

<img width="1319" height="629" alt="image" src="https://github.com/user-attachments/assets/afb9e991-6c0b-4003-bda1-f4adce76e9a3" />

<img width="1317" height="628" alt="image" src="https://github.com/user-attachments/assets/3e8710a3-bf15-4b82-9efa-ee34fda15ee7" />

<img width="1314" height="590" alt="image" src="https://github.com/user-attachments/assets/93948993-1cb9-42db-85dd-c9118de61c16" />

<img width="830" height="608" alt="image" src="https://github.com/user-attachments/assets/9857f7fb-7f00-4278-9042-c1d552818550" />

<img width="747" height="632" alt="image" src="https://github.com/user-attachments/assets/b54e0e85-3a50-43a2-b306-0190a5c3ffc8" />

<img width="805" height="568" alt="image" src="https://github.com/user-attachments/assets/1bf27e54-d761-4240-b29e-10cd65f7ce83" />



## 👩‍💻 Developer

**Sakshi Bang**
- 🎓 WebX 2026 Project
- 💻 Full Stack Developer

---

## 📄 License
MIT License — Free to use



