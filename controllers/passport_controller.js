var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var users = require("../models/index.js");

router.get("/", function(req, res) {
  users.selectAll(function(data) {
    var hbsObject = {
      recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  console.log(req.body);
  recipes.insertOne([
    "recipes_name", "devoured"
  ], [
    req.body.name, 0
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});