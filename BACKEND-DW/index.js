'use strict'

var mongoose = require('mongoose');
var app = require('./app'); 
var port = 3800;

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/').then(
    () => { console.log("SUCCESSFUL CONNECTION : )"),

app.listen(port, () => {console.log(`Servidor corriendo en http://localhost:${port}`);});
}).catch(err => console.log(err)); 