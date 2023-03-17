const mongoose = require('mongoose');
require("dotenv").config();

mongoose.set("strictQuery", false);

const conn = mongoose.connect(process.env.ATLAS_URI)
    .then(db => {
        console.log("Databse Connected");
        return db;
    }).catch(err => {
        console.log("Connection Error: " + err);
    })

    module.exports = conn;