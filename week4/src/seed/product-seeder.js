const fs = require('fs');
const Product = require('../models/product');

const getProductData = JSON.parse(fs.readFileSync('src/data/product.json', 'utf8')).body;

async function createProduct() {
  return await Product.insertMany(getProductData)
}
module.exports = createProduct;
