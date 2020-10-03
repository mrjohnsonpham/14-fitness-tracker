// require all npm packages 
const express = require("express");
const logger = require("morgan");
// normally used for debugging 
const mongoose = require("mongoose");

const path = require("path");

// port number 
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true, useUnifiedTopology: true}, );

// from mongodbatlas-cluster
// mongodb+srv://mrjohnsonpham:Iloverocky21@cluster0.mtzrb.mongodb.net/workoutdb?retryWrites=true&w=majority



// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:${PORT}`);
});