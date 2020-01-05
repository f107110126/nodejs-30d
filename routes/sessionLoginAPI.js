const express = require('express');
let loginAPI = express.Router();

let isLogin = false;

loginAPI.get('/', function (request, response) {
    let name = 'guest';
    isLogin = false;
    let firstName = request.session.firstName,
        lastName = request.session.lastName;
    if (firstName && lastName) {
        name = firstName + '.' + lastName;
        isLogin = true;
    }

    response.render('sessionIndex', {
        title: 'Express',
        member: name,
        logstatus: isLogin,
        time: request.session.time
    });
});
loginAPI.get('/login', function (request, response) {
    response.render('login');
});

loginAPI.post('/login', function (request, response) {
    let firstName = request.body.firstName,
        lastName = request.body.lastName;
    if (firstName && lastName) {
        if (firstName === request.session.firstName
            && lastName === request.session.lastName) {
            // login with same as session stored record
            request.session.time++;
        } else {
            // login with not match session stored record
            request.session.firstName = firstName;
            request.session.lastName = lastName;
            request.session.time = 1;
        }
    } else
        return response.redirect('/session/login');
    return response.redirect('/session');
});

loginAPI.get('/logout', function (request, response) {
    request.session.destroy();
    return response.redirect('/session');
});

module.exports = loginAPI;
