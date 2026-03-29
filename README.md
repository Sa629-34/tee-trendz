 👕 Tee-Trendz

A full-stack e-commerce web application for buying t-shirts online, built with Node.js, Express, MongoDB, and Vanilla JavaScript.


 🚀 Live Demo
> Run locally using instructions below


 ✨ Features

- 🔐 User Authentication — Register & Login with bcrypt password hashing
- 🛒 Add to Cart — Products easily add ho jaate hain
- 🔢 Cart Count — Navbar mein live item count
- ➕➖ Quantity Control — Cart mein +/- buttons
- 💳 Checkout Page — Delivery address + Payment method selection
- 📦 Order History — Purane orders track karo
- 🚚 Track Order — Order details modal popup
- ❌ Cancel Order — Order cancel kar sakte hain
- 🔍 Search Bar — Products ko color/style se search karo
- 🎨 Bold & Colorful UI — Professional design with animations
- 🔴 Logout — Secure session management

---
 🛠️ Tech Stack

 Frontend
| Technology | Usage |
|------------|-------|
| HTML5 | Page Structure |
| CSS3 | Styling, Animations, Grid Layout |
| JavaScript | Logic, DOM Manipulation |
| Fetch API | Backend se communicate karna |
| localStorage | User session save karna |

 Backend
| Technology | Usage |
|------------|-------|
| Node.js | Server Runtime |
| Express.js | REST API Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | MongoDB ODM |
| bcrypt | Password Hashing & Security |
| CORS | Cross Origin Resource Sharing |

---

📁 Project Structure
wear-now-ecommerce/
├── 432_website/            Frontend Files
│   ├── mainpage.html       Home Page
│   ├── women.html          Women Products Page
│   ├── men.html            Men Products Page
│   ├── cart.html           Shopping Cart
│   ├── checkout.html       Checkout Page
│   ├── orderhistory.html   Order History Page
│   ├── login.html          Login Page
│   ├── regeiter.html       Register Page
│   ├── shop.css            Main Stylesheet
│   ├── shop.js             Cart & Search Logic
│   └── main.css            Home Page Styles
│
└── backend/                Backend Files
    └── server.js           Express Server & API Routes


 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /register | User Registration |
| POST | /login | User Login |
| GET | /cart/:userId | Cart Items fetch karo |
| POST | /add-to-cart | Item cart mein add karo |
| PUT | /update-quantity/:id | Item quantity update karo |
| DELETE | /remove/:id | Item cart se remove karo |
| POST | /save-order | Order place karo |
| GET | /orders/:userId | Order history fetch karo |
| GET | /track-order/:id | Order track karo |
| DELETE | /cancel-order/:id | Order cancel karo |

---

 ⚙️ Installation & Setup

 Prerequisites
- Node.js installed
- MongoDB Atlas account

Steps

1. Clone the repository
bash
git clone https://github.com/tumhara-username/wear-now-ecommerce.git
cd wear-now-ecommerce
```

2. Install dependencies
bash
cd backend
npm install


3. Start the server
bash
node server.js


4. Open the website

Open 432_website/mainpage.html in browser
Ya VS Code mein Live Server use karo


 🗄️ Database Schema

 User
json
{
  "name": "String",
  "email": "String",
  "password": "String (bcrypt hashed)"
}


Cart
json
{
  "userId": "String",
  "image": "String",
  "price": "String",
  "quantity": "Number"
}


 Order
json
{
  "userId": "String",
  "items": "Array",
  "total": "String",
  "address": "String",
  "payment": "String",
  "status": "String (default: Confirmed)",
  "date": "Date"
}




👩‍💻 Developer

**Sakshi Bang**
- 🎓 WebX 2026 Project
- 💻 Full Stack Developer

---

## 📄 License
MIT License — Free to use

