const express = require("express");
const { renderAbout, renderContact, renderCompose } = require("../controllers/userViewController");
const router = express.Router();

router.get("/about", renderAbout);
router.get("/contact", renderContact);
router.get("/compose", renderCompose);

module.exports = router;