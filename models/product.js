const fs = require("fs");
const path = require("path");
let products = [];
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      const productsData = JSON.parse(fileContent);
      console.log(this);
      productsData.push(this);
      products = productsData;
    });
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  }

  static fetchAll() {
    fs.readFile(p, (err, fileContent) => {
      const productsData = JSON.parse(fileContent);
      console.log(this);
      productsData.push(this);
      products = productsData;
    });
    return products;
  }
};
