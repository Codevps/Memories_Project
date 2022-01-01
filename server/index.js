import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
/*--------------------------------------------------------*/
const app = express();
const CONNECTION_URL = "mongodb://localhost:27017/memories";
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);
/*--------------------------------------------------------*/

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}/posts ..`)
    )
  )
  .catch((e) => console.log(`Server error : ${e}`));
