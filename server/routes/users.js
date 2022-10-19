 // File Name: users.js
 // Student Name: Marco Favaretto
 // Student ID: 301186334
 // Date: 10/17/2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
