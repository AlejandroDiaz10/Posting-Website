const express = require("express");
const { getAllPosts, composeNewPost, getPost, deletePost } = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/compose", composeNewPost);
router.get("/posts/:postId", getPost);
router.post("/post/delete", deletePost);

module.exports = router;