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

app.get('/api/employee', function (req, res) {
  const employeeId = url.parse(req.url, true).query.id;
  const employee = employees[employeeId];
  employee ? res.json(employee) : res.status(404).send({"error": "Not Found"});
});

module.exports = app;
