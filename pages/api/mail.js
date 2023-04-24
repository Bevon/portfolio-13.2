require("dotenv").config();
const nodemailer = require("nodemailer");
const PASSWORD = process.env.password;
export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "bevon2bevon@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "bevon2bevon@gmail.com",
    to: "bevon2bevon@gmail.com",
    subject: `Message from ${req.body.fname}`,
    text: req.body.message + " | Sent from: " + req.body.email,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  return res.status(200).json({ message: "Email Sent Successfully" });
}
