const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const router = require("./routes/auth");
const cors = require("cors");

const cloudinary = require('cloudinary')

dotenv.config();
app.use(express.json());
app.use(cors());

require("dotenv").config({ path: ".env" });

const connectionFunction = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(4000, () => {
      console.log("Connected to Mongoose and app running on port 4000");
    });
  } catch (err) {
    console.log(err);
  }
};
connectionFunction();

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);




cloudinary.v2.config({
  cloud_name: "dqdetczii",
  api_key: "349423197337996",
  api_secret: "FkENuiWWfG0bLmvHQIfG9vAe6Uc",
});


module.exports = router;
