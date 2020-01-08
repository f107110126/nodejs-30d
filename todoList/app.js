const express = require('express');
let app = express();
let dataset = require('./recordset');

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', __dirname + '/views');

app.get('/todo', function (request, response) {
    response.render('restfulTemplate', { itemlist: dataset });
});

app.use('/restful', express.static(__dirname + '/public'));

app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('todoList application at port 5000 is running...');
});
