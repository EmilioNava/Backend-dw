'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'j[a][b]{c}[d][e][f][g][h][i]';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        rol: user.rol,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };

    return jwt.encode(payload, secret);

};//fin de la funcion