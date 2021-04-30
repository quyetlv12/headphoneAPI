const mongoose = require('mongoose'); 
//start tạo ra hàm connect
const connect = () =>
    mongoose.connect(process.env.MONGO_URL,
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
