import express from "express";
import connection from "./db/db.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import blogRouter from "./routes/blog.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.send("Hello this is for checking home page");
});
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Database is connected");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log({ error: error.message });
  }
});
