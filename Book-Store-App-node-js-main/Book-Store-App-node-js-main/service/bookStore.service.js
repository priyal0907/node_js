let { bookSchema } = require("../model");


let register = (body) => {
    console.log(body, "books_services");
    return bookSchema.create(body)
};

let getUser = () => {
    return bookSchema.find();
};


let deleteuser = (id) => {
    return bookSchema.findByIdAndDelete(id);
}

let updateUser = (id, body) => {
    return bookSchema.findByIdAndUpdate(id, body)
}




module.exports = { register, getUser, deleteuser, updateUser }