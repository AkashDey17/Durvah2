const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/service", (req, res) => {
  res.render("service.ejs");
});

// app.get("/product", (req, res) => {
//   res.render("product.ejs");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact.ejs");
// });

// app.get("/service1", (req, res) => {
//   res.render("service1.ejs");
// });

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
