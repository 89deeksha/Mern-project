import Book from '../model/book.model.js'; // use correct path and .js

export const getBook = async (req, res) => {
  try {
    const model = await Book.find();
    res.status(200).json(model);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
};
