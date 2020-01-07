const todoModule = require('./modules');
const seedData = require('./recordset');

let insertData = async function (data) {
    todoModule.find(data, function (error, response) {
        if (error) console.log(error);
        // else console.log(response);
        if (response.length > 0) return;
        else todoModule.insert(data, function (error, response) {
            if (error) console.log(error);
            // else console.log(response);
        });
    });
};

seedData.map(function (item) {
    insertData(item);
});
