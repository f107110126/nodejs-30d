let mongoData = require('./mongoListData');

mongoData.personList(function(response) {
    console.log(response);
});