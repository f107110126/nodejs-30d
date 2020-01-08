const express = require('express');
const bodyParser = require('body-parser');
const todoList = require('./controllers/todoList');
let app = express();

// configure app to use bodyParser()
// this will let us get the data from Request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', __dirname + '/views');

app.use('/todo', todoList);

app.use('/restful', express.static(__dirname + '/public'));

app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('todoList application at port 5000 is running...');
});
