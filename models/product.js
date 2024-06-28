const fs = require("fs");
const path = require("path");
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
      let products = [];
      if (!err && fileContent.length > 0) {
        try {
          products = JSON.parse(fileContent);
        } catch (parseErr) {
          console.log("Error parsing JSON", parseErr);
        }
      }
      const productData = { title: this.title };
      products.push(productData);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        // ...
        console.log("Error reading file", err);
        return cb([]);
      }
      if (fileContent.length === 0) {
        // ...
        return cb([]);
      }
      try {
        // ...
        const products = JSON.parse(fileContent);
        cb(products);
      } catch (parseErr) {
        // ...
        console.log("Error parsing JSON", parseErr);
        cb([]);
      }
    });
  }
};
