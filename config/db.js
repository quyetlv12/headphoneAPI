const mongoose = require('mongoose'); 
//start tạo ra hàm connect
const MONGODB_URL = process.env.MONGODB_URL ||"mongodb://localhost:27017/quyet_buy"
const connect = () =>
    mongoose.connect(MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
    
    .then((data) =>
    console.log({ connect: "kết nối thành công đến database !"})
  )
  .catch((err) => console.log("error"));

module.exports = { connect };
