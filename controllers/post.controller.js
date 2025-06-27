import { postModel } from "../models/post.model.js";
import { userModel } from "../models/user.model.js";

// CREATE POST
const createPost = async (req, res) => {
    const body = req.body;
    const {id} = req.user;

    try {
        const newPost = new postModel({
            creator: id,
             ...body,
        });
        const savedPost = await newPost.save();
        await userModel.findByIdAndUpdate(
            id,
            { $push: {posts: savedPost.id} }, 
            {new:true}
        );

        return res.send("post created successfully!")

    } catch (error) {
        console.log(error.message);

        res.status(500).json({ message: "Error creating post", error });
    }
};


// DELETE POST (only by creator)
const deletePost = async (req, res) => {
    const { postId } = req.query;
    const { id, admin } = req.user;
    console.log(req.user);

    // check for post existence
    const post = await postModel.findById(postId);
    if (!post) {
        return res.send("Post does not exist");
    }

    if (id != post.creator && !admin) {
        return res.send("this post does not belong to you");
    }

    try {
    await postModel.findByIdAndDelete(postId);
    res.send("Post deleted successfully!");
    } catch (error) {
        return res.send(error.message);
    }
};

// Other CRUD functions stay mostly the same
const getUserPosts = async (req, res) => {
    const {userId} = req.query;

    if(!userId){
        return res.send("user does not exist");
    }

    try {
        const posts = await postModel.find({creator:userId});
        return res.json(posts);
    } catch (error) {
        return res.json(error);
    }
};


const getSinglePost = async (req, res) => {
    const {postId} = req.query;
    
    // check for post existence
    const post = await postModel.findById(postId).populate("creator");
    if (!post) {
        return res.send("Post does not exist");
    }

    try {
        res.json({message: "Post retrieved successfully!", post});
        } catch (error) {
            res.status(500).json({ message: "Error retrieving post", error });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
};

const updatePost = async (req, res) => {

    const {userId} = req.query;
    const { postId, ...updatedData } = req.body;

    try {
        const post = await postModel.findById(postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.creator != userId) {
            return res.status(403).json({ message: "You are not authorized to update this post" });
        }

        const updatedPost = await postModel.findByIdAndUpdate(postId, updatedData, { new: true });
        res.status(200).json({ message: "Post updated successfully", post: updatedPost });
    } catch (error) {
        res.status(500).json({ message: "Error updating post", error });
    }
};

export {
    createPost,
    getUserPosts,
    getSinglePost,
    getAllPosts,
    updatePost,
    deletePost
};
