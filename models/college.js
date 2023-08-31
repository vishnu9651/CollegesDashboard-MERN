const mongoose = require("mongoose");

const varientSchema = new mongoose.Schema({
    specialisation: String,
    totalFee: Number,
    duration: Number,
    type: String, // Certification/Degree
    studyMode: String,
    eligibility: String,
    syllabus: String,
});

const reviewSchema = new mongoose.Schema({
    reviewerName: String,
    reviewText: String,
    rating: Number,
});

const courseSchema = new mongoose.Schema({
    courseTag: String, // MBA
    courseName: String,
    varient: [varientSchema],
    placementPackages: Number,
    placementAssistance: Boolean, // true/false
});

const collegeSchema = new mongoose.Schema({
    
    collegeName: String,
    city: String,
    state: String,
    country: String,
    headerImageUrl: String,
    collegeLogoUrl: String,
    courses: [courseSchema],
    OverallRating: String,
    reviews: [reviewSchema],
    website: String,
    shortDescription: String,
    longDescription: String,
    accreditation: [String],
    ranking: Number,
    galleryUrl: String,
    placementPartners: String,
    highlights: String,
    news: String,
    youtubeVideoUrl: String,
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;





// const mongoose=require("mongoose");

// const varientSchema=new mongoose.Schema({
//     specialisation:String,//ok
//     totalFee:Number,  //ok
//     duration:Number, //ok
//     type:String, //type(Certification/Degree) //ok
//     studyMode:String, //ok
//     eligibility:String,  //{minimum eligibility} //ok
//     syllabus:String //ok
// })


// const courseSchema = new mongoose.Schema({

// courseTag:String,//ok MBA
// courseName:String, //ok
// varient:[varientSchema],
// placementPackages:Number, //ok
// placementAssistance:Boolean // (Yes/No) //ok
// })

// const reviewSchema = new mongoose.Schema({
//     reviewerName: String,
//     reviewText: String,
//     rating: Number,
// })

// const collegeSchema= new mongoose.Schema({
//     id: Number,//ok
//     collegeName: String,//ok
//     city: String,//ok
//     state: String,//ok
//     country: String,//ok
//     headerImageUrl: String, //ok
//     collegeLogoUrl: String, //ok
//     courses: [courseSchema],//ok
//     OverallRating: String, //ok
//     reviews: [reviewSchema], //ok
//     website: String,//ok
//     shortDescription: String, //ok
//     longDescription: String, //ok
//     accreditation: [String], //ok
//     ranking:Number,//ok
//     galleryUrl:String,//ok
//     placementPartners:String, //ok
//     highlights:String, //ok
//     news:String, //{latestNews About College} //ok
//     youtubeVideoUrl:String, //{Youtube Link About College or Course} //ok
    
// })

// const College=mongoose.model("College", collegeSchema)

// module.exports=College;
