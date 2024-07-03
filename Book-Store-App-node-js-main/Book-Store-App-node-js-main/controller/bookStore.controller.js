let { bookService } = require("../service");
let register = async (req, res) => {
    try {
        console.log(req.body);
        let body = req.body;

        let user = await bookService.register(body);

        res.status(201).json({
            message: "book register success..",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}
let getUser = async (req, res) => {
    try {
        console.log(req.body);
        let getuser = await bookService.getUser();
        res.status(200).json({
            message: "get all user success",
            getuser,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};
let deleteUser = async (req, res) => {
    try {
        let { id } = req.params;

        let deletebook = await bookService.deleteUser(id);

        res.status(200).json({
            message: "delete order success",
            deletebook,
        })
    } catch (err) {
        res.json(500).json({
            message: err.message
        })
    }
};

let updateUser = async (req, res) => {
    try {
        let body = res.body;
        let { id } = req.params;

        let update = await bookService.updateUser(id, body);
        res.status(200).json({
            message: "updated success",
            update,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};
module.exports = { register, getUser, deleteUser, updateUser }