module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      author: String,
      text: String,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Article = mongoose.model("article", schema);
  return Article;
};
