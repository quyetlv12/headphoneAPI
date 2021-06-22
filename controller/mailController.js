import nodemailer from "nodemailer";
export const sendMailer = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "tt4500108@gmail.com", //Tài khoản gmail vừa tạo
      pass: "thanhthuy2002", //Mật khẩu tài khoản gmail vừa tạo
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  var mainOptions = {
    // thiết lập đối tượng, nội dung gửi mail
    from: "NQH-Test nodemailer",
    to: req.body.mail,
    subject: `Xin chào ${req.body.mail} ! Bạn đã đặt hàng thành công`,
    text: "", 
    html: "Cảm ơn bạn đã mua hàng của trang web headphone nhé !", 
  };
  transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      res.status(400).json({
        error: "gửi mail không thành công",
      });
    } else {
      res.status(200).json({
        message: "gửi thành công",
      });
    }
  });
};
