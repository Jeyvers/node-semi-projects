const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
 const products = await Product.find({}).select("name price");
 res.status(200).json({ msg: products, total: products.length });
};
const getAllProducts = async (req, res) => {
 // when it comes to query strings, you can use anything
 const { featured, company, name, sort, fields, numericFilters } = req.query;
 const queryObject = {};

 if (featured) {
  queryObject.featured = featured === "true" ? true : false;
 }

 if (company) {
  queryObject.company = company;
 }

 if (name) {
  queryObject.name = { $regex: name, $options: "i" };
 }

 if (numericFilters) {
  const operatorMap = {
   ">": "$gt",
   ">=": "$gte",
   "=": "$eq",
   "<": "$lt",
   "<=": "$lte",
  };
  const regEx = /\b(<|>|>=|=|<|<=)\b/g;
  let filters = numericFilters.replace(
   regEx,
   (match) => `-${operatorMap[match]}-`
  );

  const options = ["price", "rating"];
  filters = filters.split(",").forEach((item) => {
   const [field, operator, value] = item.split("-");
   if (options.includes(field)) {
    queryObject[field] = { [operator]: Number(value) };
   }
  });
 }
 console.log(queryObject);

 //  negative sorting sorts in descending order
 let result = Product.find(queryObject);
 //  sort
 if (sort) {
  const sortList = sort.split(",").join(" ");
  result = result.sort(sortList);
  console.log("sort", sort);
  // products = products.sort();
 } else {
  result = result.sort("createdAt");
 }

 if (fields) {
  const fieldsList = fields.split(",").join(" ");
  result = result.select(fieldsList);
 }

 //  pagination
 const page = Number(req.query.page) || 1;
 const limit = Number(req.query.limit) || 10;
 const skip = Number(page - 1) * limit;

 result = result.skip(skip).limit(limit);
 const products = await result;

 res.status(200).json({ products, total: products.length });
};

module.exports = {
 getAllProducts,
 getAllProductsStatic,
};
