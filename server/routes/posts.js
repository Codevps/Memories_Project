import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
  likePost,
  getPostsBySearch,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);

router.post("/", auth, createPost);

router.patch("/:id", auth, updatePost);
router.patch("/:id/likePost", auth, likePost);

router.delete("/:id", auth, deletePost);

export default router;
