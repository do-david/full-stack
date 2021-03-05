//const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean
    },
    age: {
        type: Number
    }
    // localisation: {
    //     zipCode: Number,
    //     address: String
    // }
});

module.exports = mongoose.model('User', userSchema);