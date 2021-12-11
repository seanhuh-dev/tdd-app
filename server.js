const express = require("express");
const PORT = 5000;

const app = express();
app.use(express.json()); /* bodyParser - req.body */

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
