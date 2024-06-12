const express = require('express');
const emailConfirm = express.Router();
const nodemailer = require('nodemailer');
const emailConfirmFunc = require('../Controller/emailConfirmcontroller');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.MAILER_ID,
        pass: process.env.MAILER_PASSCODE,
    },
});

emailConfirm.get('/seller', emailConfirmFunc);


module.exports = emailConfirm;