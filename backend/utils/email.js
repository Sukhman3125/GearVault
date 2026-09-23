import nodemailer from "nodemailer";
import config from "../config/config.js";

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

const sendEmail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: config.email.user,
    to,
    subject,
    html,
  });
};

export default sendEmail;