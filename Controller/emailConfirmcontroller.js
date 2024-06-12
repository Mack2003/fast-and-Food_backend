const emailConfirmFunc = async (req, res) => {

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"Fast & Foode" <${process.env.MAILER_ID}>`, // sender address
        to: "niharroy743376@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>Hello world?</b>
    <img src="https://images.imyfone.com/filme/assets/article/image-to-url-converter.jpeg"/>
    `,
    });
    res.json(info);
}

module.exports = emailConfirmFunc;