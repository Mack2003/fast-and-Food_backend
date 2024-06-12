const express = require('express');
const reaturentSchema = require('../Model/resturentmodule');
const resturentRoute = express.Router();

resturentRoute.get('/', async(req, res) => {
    try {
        const data = await reaturentSchema.find({});
        if (data.length>0) {
            res.header(200).json({status:true, data:data});
        }else{
            res.header(400).json({status:false, massage:"No data available to show", data:null});
        };
    } catch (error) {
        res.header(500).json({status:false, massage:error.massage, data:null});
    };
}); 

resturentRoute.get('/single/:id', async(req, res) => {
    try {
        const data = await reaturentSchema.find({_id: req.params.id});
        if (data.length>0) {
            res.header(200).json({status:true, data:data[0]});
        }else{
            res.header(400).json({status:false, massage:"No data available to show", data:null});
        };
    } catch (error) {
        res.header(500).json({status:false, massage:error.massage, data:null});
    };
}); 

module.exports = resturentRoute;