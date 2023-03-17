const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// categories => field => ['type', 'color']
// const categories_model = new Schema({
//     type: { type: String, default: 'Investment'},
//     color: { type: String, default: '#FCBE44' }
// })

// transactions => field => ['name', 'type', 'amount', 'date']
// const transaction_model = new Schema({
//     name: { type: String, default: 'Anonymous'},
//     type: { type: String, default: 'Investment'},
//     amount: { type: Number },
//     date: { type: Date, default: Date.now}
// })

// user => fields => ['user-token', 'username', 'email', 'contactNo', 'password']
const user_model = new mongoose.Schema(
    {
        user_token: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
    },
    { timestamps: true }
);

// otp => field => ['email', 'otp', 'expireAt']
const otp_model = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        expireAt: {
            type: Date,
            default: Date.now,
            index: { expires: "300s" },
        },
    },
    { timestamps: true }
);

// const Categories = mongoose.model('categories', categories_model);
// const Transaction = mongoose.model('transaction', transaction_model);
const User = mongoose.model('user', user_model);
const Otp = mongoose.model('otp', otp_model);

module.exports = {
    User,
    Otp,
};