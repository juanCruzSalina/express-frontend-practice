const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "Main page Example" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contact Page Example" });
});

module.exports = router;
