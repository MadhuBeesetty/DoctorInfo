var mongojs = require('mongojs');
var db = mongojs('mongodb://shruti:shruti019@ds125871.mlab.com:25871/listdoctor', ['doctors']);

/* GET All doctors listing. */
app.get('/getDoctors', function(req, res, next) {
    db.doctors.find(function (err, doctor) {
        if (err){
            console.log("Error");
            res.send(err);
        }
        res.json(doctor);
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

