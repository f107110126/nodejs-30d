// enter the page need verify...
let express = require('express');
let loginAPI = express.Router();

let isLogin = false;

loginAPI.get('/', function (request, response) {
    let name = 'guest';
    isLogin = false;
    if (request.signedCookies.firstName && request.signedCookies.lastName) {
        name = request.signedCookies.firstName + '.' + request.signedCookies.lastName;
        isLogin = true;
    }

    response.render('index', {
        title: 'Express',
        member: name,
        logstatus: isLogin
    });
});

loginAPI.get('/login', function (request, response) {
    response.render('login');
});

loginAPI.post('/post', function (request, response) {
    console.log(request.body);
    if (request.body.firstName === '' || request.body.lastName === '') {
        return response.redirect('/cookie/login');
    } else {
        response.cookie(
            'firstName',
            request.body.firstName,
            { path: '/cookie', signed: true, maxAge: 600000 }
        );
        response.cookie(
            'lastName',
            request.body.lastName,
            { path: '/cookie', signed: true, maxAge: 600000 }
        );
        isLogin = true;
        return response.redirect('/cookie');
    }
});

loginAPI.get('/logout', function (request, response) {
    isLogin = false;
    response.clearCookie('firstName', { path: '/cookie' });
    response.clearCookie('lastName', { path: '/cookie' });
    return response.redirect('/cookie');
});

module.exports = loginAPI;