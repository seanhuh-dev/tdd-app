const express = require("express");
const PORT = 6000;

const app = express();
app.use(express.json()); /* bodyParser - req.body */

// path와 handler를 각각 router와 controller로 분리
const productRoutes = require("./routes");
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
