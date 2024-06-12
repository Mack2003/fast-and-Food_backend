const express = require('express');
const cardsModel = require('../Model/cardsModel');
const cardsRouter = express.Router();

cardsRouter.get('/', async (req, res) => {
    try {
        const cardsData = await cardsModel.find({});
        if (cardsData.length>0) {
            res.header(200).json({ status: true, data: cardsData });
        } else {
            res.header(400).json({ status: false, massage: "No data available", data: null });
        };
    } catch (error) {
        res.header(500).json({ status: false, massage: error, data: null });
    };
});

module.exports = cardsRouter;