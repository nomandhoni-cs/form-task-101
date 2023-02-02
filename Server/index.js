const express = require("express");
const app = express();
const db = require("./connection");
const Post = require("./postMode");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CRUD apis
// CRUD apis to create a user with name and email
//Post request
app.post("/users", async (req, res) => {
    const { name, email, sector, isAgreed } = req.body;
    console.log(name, email);
    try {
      const post = await Post.create({ name, email, sector, isAgreed });
      res.json(post);
      console.log(post);
    } catch (err) {
        res.status(500).send(err);
    }
});
//Get request
app.get("/users", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
        console.log(posts);
    } catch (err) {
        res.status(500).send(err);
    }
});
//Get request by id
app.get("/user/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
        console.log(post);
    } catch (err) {
        res.status(500).send(err);
    }
});
//Put request
app.put("/user/:id", async (req, res) => {
    const {id} = req.params;
    const {name, email, sector, isAgreed} = req.body;
    try {
        const post = await Post.findByIdAndUpdate(id, {name, email, sector, isAgreed});
        res.json(post);
        console.log(post);
    } catch (err) {
        res.status(500).send(err);
    }
});
//Delete request
app.delete("/user/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.json(post);
        console.log(post);
    } catch (err) {
        res.status(500).send(err);
    }
});




app.listen(9000, () => console.log("Server is running on port 9000"));
