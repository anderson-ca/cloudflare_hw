const express = require("express");
const eh = require("express-handlebars");

const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');

app.engine("handlebars", eh());
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get("/", function (req, res) {
  const h = req.headers;
  res.render("home", { headers: h });
});

app.get("/report", function (req, res) {

  res.render("report");
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
