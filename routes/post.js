const express = require("express");
const { getAllPosts, composeNewPost, getPost } = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/compose", composeNewPost);
router.get("/posts/:postId", getPost);

module.exports = router;