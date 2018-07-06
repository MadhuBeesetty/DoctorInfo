var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var logger = require('morgan');

var app = express();
port = process.env.PORT || 3000;
app.listen(4001, function () {
    console.log('Server started on:' + port);
});

app.use(cors());

var mongojs = require('mongojs');
var db = mongojs('mongodb://shruti:shruti019@ds125871.mlab.com:25871/listdoctor', ['doctors']);

/* GET All doctors listing. */
app.get('/getDoctors', (req, res) => {
  console.log('i am here');
    db.doctors.find(function (err, doctor) {
        if (err){
            console.log("Error");
            res.send(err);
        }
      console.log(doctor);
      res.send(doctor);
    });
});

/*single specific doctor */
app.get('/doctor/:id', function (req, res, next) {
    db.doctors.findOne({_id: mongojs.ObjectID(req.params.id)},function (err, doctor) {
        if (err){
            console.log("Error");
            res.send(err);
        }
        res.json(doctor);
    });
});
