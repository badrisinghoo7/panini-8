import express from "express";
import connection from "./db/db.js";
import userRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello this is for checking home page");
});
app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Database is connected");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log({ error: error.message });
  }
});
