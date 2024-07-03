const { bookService } = require("../services");

const getbook = async (req, res) => {
  const book = await bookService.getbook();

  console.log(book, "get");

  res.status(200).json({
    message: "product get success",
    data: book,
  });
};

const addbook = async (req, res) => {
  try {
    const body = req.body;

    console.log(body);

    const book = await bookService.addbook(body);

    req.status(201).json({
      message: "book created success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deletebook = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const book = await bookService.deletebook(id);
    if (!book) {
      throw new Error("Something want wrong");
    }
    res.status(200).json({
      message: "book delete success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updatebook = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const book = await bookService.updatebook(id, body);

    res.status(200).json({
      message: "book updated success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { getbook, addbook, deletebook, updatebook };
