import express from "express";
import {
  AddingBlog,
  commentBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  getBlogById,
  getBlogsByTag,
  getBlogsByUser,
  likeBlog,
  updateBlog,
} from "../controller/blog.controller.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/createBlog", auth, AddingBlog);
blogRouter.get("/getBlog", auth, getBlog);
blogRouter.get("/getLatestBlog", getAllBlogs);
blogRouter.get("getBlogByUser", auth, getBlogsByUser);
blogRouter.get("/getBlog/:id", auth, getBlogById);
blogRouter.get("/getBlogByTag/:tag", auth, getBlogsByTag);
blogRouter.patch("/updateBlog/:id", auth, updateBlog);
blogRouter.delete("/deleteBlog/:id", auth, deleteBlog);
blogRouter.put("/like/:id", auth, likeBlog);
blogRouter.put("/comment/:id", auth, commentBlog);

export default blogRouter;
