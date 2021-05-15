//start import
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
// import mongodb from "./config/db";
import authRouter from "./routes/authRouter";
import CategoryRouter from "./routes/cateRouter";
import NewsRouter from "./routes/newsRouter";
import productRouter from "./routes/productsRouter";
import userRouter from "./routes/userRouter";
const mongoose = require("mongoose");

//start yêu cầu hình env trong file app
dotenv.config();
// const authRouter = require('./routes/authRouter')

// //start kết nối tới mongodb
// mongodb.connect()
//start gán express == app
const app = express();

//start tạo ra hàm connect
const connect = () =>
  mongoose
    .connect(process.env.MONGODB || "mongodb://localhost:27017/quyet_buy", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    .then((data) =>
      console.log({ connect: "kết nối thành công đến database !" })
    )
    .catch((err) => console.log("error"));

connect();
//start sử dụng morgan làm midDleware cho app
app.use(morgan("dev"));

//start cors
app.use(cors());

// app.use(expressValidator())

//Start sử dụng bodyParser để lấy dữ liệu từ client lên server
app.use(bodyParser.json());
//start thiết lập môi trường cho cổng API

const port = process.env.PORT || 8000;

// start sử dụng router từ file routes
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", CategoryRouter);
app.use("/api", NewsRouter);
app.use("/api", authRouter);

app.get("/", (req, res) => {
  return res.send(/*html*/ `<div>
  <h1>CHÀO MỪNG BẠN ĐẾN VỚI HEADPHONE API</h1>
  <p>products <a href="https://headphoneapi.herokuapp.com/api/products" target="_blank" rel="noopener noreferrer">Products</a></p>
  <p>products <a href="https://headphoneapi.herokuapp.com/api/categories" target="_blank" rel="noopener noreferrer">categories</a></p>
  <p>products <a href="https://headphoneapi.herokuapp.com/api/users" target="_blank" rel="noopener noreferrer">users</a></p>
  <p>products <a href="https://headphoneapi.herokuapp.com/api/news" target="_blank" rel="noopener noreferrer">news</a></p>
  </div>`);
});
// start lắng nghe cổng 4000
app.listen(port, () => {
  console.log("kết nối thành công tới : " + port);
});
