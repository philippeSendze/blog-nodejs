require("dotenv").config();
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = process.env.DATABASE_URL;
db.articles = require("./article.model.js")(mongoose);
module.exports = db;
