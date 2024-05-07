const express = require("express");
const cors = require("cors");
const app = express();

// Use CORS middleware
app.use(cors());

const port = 4000;
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb+srv://aoumad8:testingdb123@cluster0.0hb6nok.mongodb.net/db_testing", {
    useNewUrlParser: true,
    // useUnifiedTopology: true
});

// Route handler for login
app.get("/login", async (req, res) => {
    const { username, password } = req.query;
    console.log("Login request", username, password);
    try {
        const user = await User.findOne({ username });

        // Check if user exists
        console.log("User found:", user);
        if (user && user.password === password) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});