const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const cors = require("cors");
const app = express();
const College = require("./models/college");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", (req, res) => {
    res.send("Welcome to the College Database API");
});

// Add a route to create a new college
app.post("/colleges/add", async (req, res) => {
    const collegeData = req.body;

    try {
        const newCollege = await College.create(collegeData);
        res.status(201).json(newCollege);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Add a route to get all colleges
app.get("/colleges", async (req, res) => {
    try {
        const colleges = await College.find();
        res.json(colleges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
