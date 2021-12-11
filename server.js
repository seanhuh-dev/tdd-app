const express = require("express");
const PORT = 6000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.c23yq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));
const app = express();
app.use(express.json()); /* bodyParser - req.body */

// path와 handler를 각각 router와 controller로 분리
const productRoutes = require("./routes");
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
