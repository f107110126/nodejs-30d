const express = require('express');
const modules = require('../modules');
let todoList = express.Router();

todoList.get('/', function (request, response) {
    modules.queryGet({ message: '' }, function (_error, _response) {
        if (_error) console.log(_error);
        // else console.log(_response);
        else
            response.render(
                'restfulTemplate',
                { baseUrl: request.baseUrl, itemlist: _response }
            );
    });
});

todoList.post('/', function (request, response) {
    let new_data = { message: request.body.momsg };
    if (new_data.message)
        modules.create([new_data], function (_error, _response) {
            // if (_error) console.log(_error);
            // else console.log(_response);
            if (_error || _response.insertedCount === 0) response.end('encountered error.');
            else
                modules.queryGet({ message: '' }, function (_error2, _response2) {
                    if (_error2) console.log(_error2);
                    else response.render('recordTemplate', { itemlist: _response2 });
                    response.end();
                });
        });
    else
        modules.queryGet({ message: '' }, function (_error2, _response2) {
            if (_error2) console.log(_error2);
            else response.render('recordTemplate', { itemlist: _response2 });
            response.end();
        });
});

todoList.get('/:term', function (request, response) {
    let term = request.params.term;
    modules.queryGet(
        { message: term },
        function (_error, _response) {
            if (_error) console.log(_error);
            // else console.log(_response);
            else response.render('recordTemplate', { itemlist: _response });
        }
    );
});

todoList.put('/:id', function (request, response) {
    let target_id = Number(request.params.id);
    let new_data = {
        id: Number(request.body.moid),
        message: request.body.momsg
    };
    modules.update({ id: target_id }, new_data, function (_error, _response) {
        // if (_error) console.log(_error);
        // else console.log(_response);
        if (_error || _response.modifiedCount === 0) response.send('encountered error.');
        else response.render('oneTemplate', { oneid: new_data.id, onemsg: new_data.message });
    });
});

todoList.delete('/:id', function (request, response) {
    let target_id = Number(request.params.id);
    modules.delete({ id: target_id }, function (_error, _response) {
        // if (_error) console.log(_error);
        // else console.log(_response);
        if (_error || _response.deletedCount === 0) response.send('encountered error.');
        else response.send('document removed successfully!');
    });
});

module.exports = todoList;
