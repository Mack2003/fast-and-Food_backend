const express = require('express');
const emailConfirm = require('./Routes/emailConfirm');
const app = express();
const mongoose = require('mongoose');
const resturentRoute = require('./Routes/resturentroute');
const cors = require('cors');
const userRoute = require('./Routes/userRoute');
const cardsRouter = require('./Routes/cardsRouter');
const Razorpay = require('razorpay');
require('dotenv').config();

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use('/cards', cardsRouter);
app.use('/mail', emailConfirm);
app.use('/resturents', resturentRoute);
app.use('/user', userRoute);
mongoose.connect(process.env.MONGODB).then(()=>{
    app.listen(process.env.PORT, (err)=>{
        if (err) console.log(`Error: ${err}`);
        console.log(`Server is running on port no. ${process.env.PORT}`)
    });
}).catch((err)=> console.log(err));


const rezorPay = new Razorpay({
    key_id: 'rzp_test_IG9jeB32X4c02g',
    key_secret: 'eTpFIL7Jkw36x8JUCU9p1KXc',
})


app.post('/money', async (req, res) => {
    const options = {
        amount: req.body.amount * 10,
        currency: 'INR',
    }
    try {
        const response = await rezorPay.orders.create(options);
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
})