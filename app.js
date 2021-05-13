//start import
import express from "express";
import productRouter from "./routes/productsRouter";
import userRouter from "./routes/userRouter";
import NewsRouter from "./routes/newsRouter";
import morgan from "morgan";
import dotenv from "dotenv";
import CategoryRouter from "./routes/cateRouter";
import bodyParser from "body-parser";
import cors from "cors";
const mongoose = require("mongoose");
// import mongodb from "./config/db";
import authRouter from "./routes/authRouter";
import expressValidator from "express-validator";

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
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    .then((data) =>
      console.log({ connect: "kết nối thành công đến database !" })
    )
    .catch((err) => console.log("error"));


connect()
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
  return res.status(200).json({
    message: " trang chur",
  });
});
// start lắng nghe cổng 4000
app.listen(port, () => {
  console.log("kết nối thành công tới : " + port);
});
