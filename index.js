import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './Routes/Routes.js';
import userRouter from './Routes/UserRoute.js'; // ✅ Corrected import

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(express.json());
app.use('/book', bookRoute);
app.use('/users', userRouter); // ✅ Corrected router usage

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
})
.catch(err => {
  console.error("❌ MongoDB connection failed:", err);
});
