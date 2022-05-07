module.exports = (app) => {
  const article = require("../controllers/article.controller.js");
  var router = require("express").Router();
  // Create a new article
  router.post("/", article.create);
  // Retrieve all articles
  router.get("/", article.findAll);
  // Retrieve a single article with id
  router.get("/:id", article.findOne);
  // Update a article with id
  router.put("/:id", article.update);
  // Delete a article with id
  router.delete("/:id", article.delete);
  // Create a new article
  router.delete("/", article.deleteAll);
  app.use("/api/articles", router);
};
