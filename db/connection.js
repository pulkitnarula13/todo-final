const mongoose = require("mongoose");

// Connection with MongoDB
let mongoDB = process.env.MONGOURL;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose.connection;