const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sakshibang29_db_user:He8lzqCmI8J6G2RO@cluster0.qrkpwes.mongodb.net/tshirtDB?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error ❌:", err));

console.log("MY SERVER FILE RUNNING 🔥");

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

/* ================= CART ================= */

const cartSchema = new mongoose.Schema({
    userId: String,
    image: String,
    price: String,
    quantity: Number
});
const Cart = mongoose.model("Cart", cartSchema);

// GET CART
app.get("/cart/:userId", async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.params.userId });
        res.json(cart);
    } catch (err) {
        console.error("GET /cart error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// ADD TO CART
app.post("/add-to-cart", async (req, res) => {
    try {
        const { image, price, userId } = req.body;
        let existing = await Cart.findOne({ image, userId });
        if (existing) {
            existing.quantity += 1;
            await existing.save();
        } else {
            const newItem = new Cart({ userId, image, price, quantity: 1 });
            await newItem.save();
        }
        const cart = await Cart.find({ userId });
        res.json(cart);
    } catch (err) {
        console.error("POST /add-to-cart error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// REMOVE
app.delete("/remove/:id", async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        const cart = await Cart.find();
        res.json(cart);
    } catch (err) {
        console.error("DELETE /remove error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// UPDATE QUANTITY
app.put("/update-quantity/:id", async (req, res) => {
    try {
        const { quantity } = req.body;
        await Cart.findByIdAndUpdate(req.params.id, { quantity });
        const item = await Cart.findById(req.params.id);
        const cart = await Cart.find({ userId: item.userId });
        res.json(cart);
    } catch (err) {
        console.error("PUT /update-quantity error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

/* ================= ORDERS ================= */

const orderSchema = new mongoose.Schema({
    userId: String,
    items: Array,
    total: String,
    address: String,
    payment: String,
    status: { type: String, default: "Confirmed" },
    date: { type: Date, default: Date.now }
});
const Order = mongoose.model("Order", orderSchema);

// SAVE ORDER
app.post("/save-order", async (req, res) => {
    try {
        const { userId, items, total, address, payment } = req.body;
        const order = new Order({ userId, items, total, address, payment });
        await order.save();
        await Cart.deleteMany({ userId });
        res.json({ message: "Order saved ✅" });
    } catch (err) {
        console.error("POST /save-order error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// GET ORDER HISTORY
app.get("/orders/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId }).sort({ date: -1 });
        res.json(orders);
    } catch (err) {
        console.error("GET /orders error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// TRACK ORDER
app.get("/track-order/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json(order);
    } catch (err) {
        console.error("GET /track-order error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// CANCEL ORDER
app.delete("/cancel-order/:id", async (req, res) => {
    try {
        await Order.findByIdAndUpdate(req.params.id, { status: "Cancelled" });
        res.json({ message: "Order cancelled ✅" });
    } catch (err) {
        console.error("DELETE /cancel-order error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

/* ================= USER AUTH ================= */

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model("User", userSchema);

// REGISTER
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Agar koi field missing hai
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Sab fields bharo ❌" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists ❌" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.json({ message: "User registered ✅" });
    } catch (err) {
        console.error("POST /register error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// LOGIN
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email aur password daalo ❌" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found ❌" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ message: "Wrong password ❌" });
        }

        // Password hatakar bhejo
        const userObj = user.toObject();
        delete userObj.password;

        res.json({ message: "Login successful ✅", user: userObj });
    } catch (err) {
        console.error("POST /login error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

/* ================= START ================= */

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});