import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
import { CONNECTION_URL, PORT } from "./secret.js";
/*--------------------------------------------------------*/
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);
app.use("/user", userRouter);
/*--------------------------------------------------------*/

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}/posts ..`)
    )
  )
  .catch((e) => console.log(`Server error : ${e}`));
