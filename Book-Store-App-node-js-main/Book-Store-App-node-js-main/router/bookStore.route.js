let express = require("express");
let route = express.Router();
const validate = require("../middleware/validate");
let { bookController } = require("../controller");


route.post("/register", bookController.register);
route.get("/getuser/:id", bookController.getUser);
route.delete("/deleteuser/:id", bookController.deleteUser);
route.put("/update/:id", bookController.updateUser)


module.exports = route;