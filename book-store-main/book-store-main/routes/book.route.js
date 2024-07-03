const express = require("express");
const validate = require("../middlewares/validate");
const { bookValidation } = require("../validations");
const { bookController } = require("../controllers");
const route = express.Router();

route.get("/get",bookController.getbook);
route.post("/add",validate(bookValidation.addbook),bookController.addbook)
route.delete("/delete/:id",bookController.deletebook)
route.put("/update/:id",validate(bookValidation.addbook),bookController.updatebook)

module.exports = route;