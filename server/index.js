'use strict';

const express = require('express');
const url = require('url');
const app = express();

const employees = {
  "1": {
    "name": "Bob",
    "office_location": "Bangalore"
  },
  "2": {
    "name": "Tom",
    "office_location": "Pune"
  }
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/employee', function (req, res) {
  const employeeId = url.parse(req.url, true).query.id;
  const employee = employees[employeeId];
  employee ? res.json(employee) : res.status(404).send({"error": "Not Found"});
});

module.exports = app;
