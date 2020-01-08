const todoModule = require('./modules');
const seedData = require('./recordset');

let testFunction = async function () {
    // await todoModule.create([
    //     { message: 'first-1 new message.' },
    //     { message: 'second-1 new message.' },
    //     { message: 'third-1 new message.' }
    // ], (error, response) => {
    //     if (error) console.log(error);
    //     else console.log(response);
    // });
    // await todoModule.updateSave(
    //     { id: 10, message: 'error data' },
    //     function (error, response) {
    //         if (error) console.log(error);
    //         else console.log(response);
    //     }
    // );
    await todoModule.removeSave(
        { id: 10 },
        function (error, response) {
            if (error) console.log(error);
            else console.log(response);
        }
    );
}

testFunction();

