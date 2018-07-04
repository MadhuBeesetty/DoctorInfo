var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://shruti:shruti019@ds125871.mlab.com:25871/listdoctor', ['doctors']);

/* GET All doctors listing. */
router.get('/doctor', function(req, res, next) {
    db.doctors.find(function (err, doctor) {
        if (err){
            console.log("Error");
            res.send(err);
        }
        res.json(doctor);
    });
});

/* GET single doctor */
router.get('/doctor/:id', function (req, res, next) {
    db.doctors.findOne({_id: mongojs.ObjectID(req.params.id)},function (err, doctor) {
        if (err){
            console.log("Error");
            res.send(err);
        }
        res.json(doctor);
    });
});

module.exports = router;
