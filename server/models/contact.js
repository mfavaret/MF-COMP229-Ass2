// File Name: contact.js
// Student Name: Marco Favaretto
// Student ID: 301186334
// Date: 10/17/2022

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "contacts"
});

 
module.exports = mongoose.model('Contact', contactModel);