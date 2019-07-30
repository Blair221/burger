const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body, function(res) {
    res.json({ id: res.insertID });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(
    { devoured: req.body.devoured },
    { id: req.body.id },
    function(res) {
      if (res.changedRows == 0) return res.status(404).end();
      else res.status(200).end();
    }
  );
});

module.exports = router;
