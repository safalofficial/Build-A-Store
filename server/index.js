const { products, categories, stores } = require("./data");
var express = require("express");
// const filtered = data.filter(
//   (item) => item["Part Name"] === "Microsoft Surface Dock Station"
// );

// console.log("This is filtered data =>", filtered);
var cors = require("cors");
var app = express();

app.use(cors());
app.use("/products", (req, res) => {
  res.json(products);
});
app.use("/categories", (req, res) => {
  res.json(categories);
});
app.use("/categories", (req, res) => {
  res.json(categories);
});
app.use(`/storeCart`, (req, res) => {
  res.json(stores.filter((store) => store.id == req.query.id));
});

app.listen("7000", () => {
  console.log("listening on port 7000");
});
