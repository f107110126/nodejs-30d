let modules = require('./modules');
let Person = modules.Person;
let someone = new Person('Andy', 'Chen');

console.log({
    'someone': someone,
    'first name': someone.firstName,
    'last name': someone.lastName,
    'full name': someone.fullName()
});
