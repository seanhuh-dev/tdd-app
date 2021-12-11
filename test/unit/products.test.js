/*describe("calculation", () => {
  test("two plus two is not five", () => {
    expect(2 + 2).not.toBe(5);
  });
});*/
const productController = require("../../controller/products");

const productModel = require("../../models/Product");
productModel.create = jest.fn();

const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("product controller create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });

  it("should call productModel.create", async () => {
    await productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });

  it("should return 201 response code", async () => {
    await productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return json body in response", async () => {
    productModel.create.mockReturnValue(newProduct);
    await productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });

  it("should handle errors", async () => {
    const errorMsg = { message: "description property missing" };
    const rejectedPromise = Promise.reject(errorMsg);
    productModel.create.mockReturnValue(rejectedPromise);
    await productController.createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMsg);
  });
});
