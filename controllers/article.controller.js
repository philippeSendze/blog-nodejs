const db = require("../models");
const Article = db.articles;
// Create and Save a new Article
// A POST request on POSTMAN must be created with the option x-www-form-urlencoded in the 'Body' part.
exports.create = (req, res) => {
  // Create a Article
  const article = new Article({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
  });

  // Save Article in the database
  article
    .save(article)
    .then((data) => {
      res.send(data);
      console.log("Article saved!");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article.",
      });
    });
};
// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
  Article.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles.",
      });
    });
};
// Find a single Article with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Article with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Article with id=" + id });
    });
};
// Update a Article by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Article.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Article with id=${id}. Maybe Article was not found!`,
        });
      } else {
        res.send({ message: "Article was updated successfully." });
        console.log("Article updated!");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Article with id=" + id,
      });
    });
};
// Delete a Article with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Article with id=${id}. Maybe Article was not found!`,
        });
      } else {
        res.send({
          message: "Article was deleted successfully!",
        });
        console.log("Article deleted!");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Article with id=" + id,
      });
    });
};
// Delete all Articles from the database.
exports.deleteAll = (req, res) => {
  const id = req.params.id;

  Article.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Articles were deleted successfully!`,
      });
      console.log("Articles deleted!");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all articles.",
      });
    });
};
