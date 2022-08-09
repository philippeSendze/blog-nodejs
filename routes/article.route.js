require("dotenv").config();

module.exports = (app) => {
  const article = require("../controllers/article.controller.js");
  var router = require("express").Router();
  // Create a new article
  router.post(`/${process.env.KEY}`, article.create); // A POST request on POSTMAN must be created with the option x-www-form-urlencoded in the 'Body' part.
  // Retrieve all articles
  router.get("/", article.findAll);
  // Retrieve a single article with id
  router.get("/:id", article.findOne);
  // Update a article with id
  router.put(`/${process.env.KEY}/:id`, article.update);
  // Delete a article with id
  router.delete(`/${process.env.KEY}/:id`, article.delete);
  // Delete all articles
  router.delete(`/${process.env.KEY}`, article.deleteAll);
  app.use("/api/articles", router);
};
