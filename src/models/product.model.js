//const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema);