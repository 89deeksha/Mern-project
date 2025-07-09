import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  img: String
});

const Book = mongoose.model('Book', schema);

export default Book; // ✅ IMPORTANT
