const express = require('express');

// configure app to use bodyParser()
// this will let us get the data from Request

// Create a router to handle routes for a set of RestAPI
let RestAPI = express.Router();

// create (/restful/robots)
RestAPI.post('/robots', function (request, response) {
    response.json({
        name: request.body.name,
        message: 'i had got the name of the robot: ' + request.body.name
    });
});

// read all & form (/restful/robots)
RestAPI.get('/robots', function (request, response) {
    response.json({
        message: 'list of robots of requested.'
    });
});

// read (/restful/robots/:id)
RestAPI.get('/robots/:id', function (request, response) {
    let id = request.params.id;
    response.json({
        id,
        message: 'number ' + id + ', the robot of requested.',
    });
});

// update ((/restful/robots/:id))
RestAPI.put('/robots/:id', function (request, response) {
    let id = request.params.id;
    response.json({
        id,
        message: 'modified number ' + id + ' of the robot.'
    });
});

// delete (restful/robots/:id)
RestAPI.delete('/robots/:id', function (request, response) {
    let id = request.params.id;
    response.json({
        id,
        message: 'destroy number ' + id + ' of the robot.'
    });
});

module.exports = RestAPI;
