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

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.productId);
    console.log("product", product);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
