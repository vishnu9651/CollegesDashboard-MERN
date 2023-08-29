// const express = require("express")

// const College = require("../models/college")

// const router = express.Router()

// router.get("/", (req, res) => {
//     res.send("hello world")
// })


// router.get("/", async (req, res) => {

//     try {
//         const colleges = await College.find()
//         res.json(colleges)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })

//     }

// })

// module.exports=router


const express = require("express");
const College = require("../models/college");

const router = express.Router();

// GET all colleges
router.get("/", async (req, res) => {
    try {
        const colleges = await College.find();
        res.json(colleges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create a new college
router.post("/", async (req, res) => {
    const {
        collegeName,
        city,
        state,
        country,
        headerImageUrl,
        collegeLogoUrl,
        courses,
        OverallRating,
        reviews,
        website,
        shortDescription,
        longDescription,
        accreditation,
        ranking,
        galleryUrl,
        placementPartners,
        highlights,
        news,
        youtubeVideoUrl,
    } = req.body;

    const newCollege = new College({
        collegeName,
        city,
        state,
        country,
        headerImageUrl,
        collegeLogoUrl,
        courses,
        OverallRating,
        reviews,
        website,
        shortDescription,
        longDescription,
        accreditation,
        ranking,
        galleryUrl,
        placementPartners,
        highlights,
        news,
        youtubeVideoUrl,
    });

    try {
        const savedCollege = await newCollege.save();
        res.status(201).json(savedCollege);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
