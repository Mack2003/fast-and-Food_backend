const express = require('express');
const userModel = require('../Model/userModule');
const userRoute = express.Router();

userRoute.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    if (name && email && password) {
        try {
            const userData = new userModel({
                name,
                email,
                password
            });
            await userData.save();
            res.header(200).json({ status: true, data: "Registered Sucessfully" });
        } catch (error) {
            res.header(500).json({ status: false, data: null, massage: error });
        };
    } else {
        res.header(400).json({ status: false, data: null, massage: "Please fill all required filds!!!" });
    };
});

userRoute.get('/', async (req, res) => {
    const { email, password } = req.query;
    try {
        const userData = await userModel.findOne({ email });
        if (userData) {
            if (userData.password === password) {
                res.header(200).json({ status: true, data: userData });
            } else {
                res.header(400).json({ status: false, data: null, massage: "Incorrect email or password" });
            };
        } else {
            res.header(400).json({ status:false, data: null, massage:"No such user available plaese register!!!" });
        };
    } catch (error) {
        res.header(500).json({ status: false, data: null, massage: error });
    };
});


module.exports = userRoute;