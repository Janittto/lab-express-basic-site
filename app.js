const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/scripts", express.static(__dirname + "/scripts"));

console.log(__dirname);
app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main", {
    title: "Main page",
    //style: ["main.css"],
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "about page",
  });
});
app.get("/works", (req, res) => {
  res.render("works", {
    title: "works page",
  });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", {
    title: "gallery",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
