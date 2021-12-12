/*exports.hello = (req, res) => {
  res.send("Hello, World!");
};*/
const productModel = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    console.log("createdProduct", createdProduct);
    res.status(201).json(createdProduct);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const allProducts = await productModel.find({});
    console.log("allProducts", allProducts);
    res.status(200).json(allProducts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
