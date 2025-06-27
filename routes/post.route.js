import express from "express";
import {
    createPost,
    getUserPosts,
    getSinglePost,
    getAllPosts,
    updatePost,
    deletePost
} from "../controllers/post.controller.js";

import { authentication } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/get-all-posts", getAllPosts);
router.get("/get-user-posts", getUserPosts);

router.post("/post", authentication, createPost);
router.put("/post", authentication, updatePost);
router.get("/post", getSinglePost);
router.delete("/post", authentication, deletePost);


export default router;
