const Post = require("../models/post");

const getAllPosts = async function (req, res) {
    const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
    await Post.find({})
        .then(posts => {
            // console.log(posts);
            res.render("home", { homeContent: homeStartingContent, posts: posts });
        })
        .catch(err => console.log(err));
}

const composeNewPost = async function (req, res) {
    const newPost = new Post({
        title: req.body.postTitle,
        description: req.body.postBody,
    });

    await newPost.save()
        .then(() => {
            console.log("New post has been inserted!");
            return res.redirect("/");
        })
        .catch(err => console.log(err));
}

const getPost = async function (req, res) {
    const reqId = req.params.postId;

    await Post.findOne({ _id: reqId })
        .then(post => {
            // console.log(post);
            res.render("post", { postTitle: post.title, postContent: post.description, postID: post._id })
        })
        .catch(err => console.log(err));
}

const deletePost = async function (req, res) {
    const postID = req.body.PostId;
    console.log(postID);

    await Post.findByIdAndDelete(postID)
        .then(() => {
            // console.log("Post has been successfully deleted");
            return res.redirect("/");
        })
        .catch(err => console.log(err));
}

module.exports = {
    getAllPosts,
    composeNewPost,
    getPost,
    deletePost,
}