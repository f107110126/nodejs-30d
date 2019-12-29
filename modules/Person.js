module.exports = function (firstName, lastName) {
    // module.exports = (firstName, lastName) => {}
    // declare like above will not work as contstructor
    console.log('been called');
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = () => {
        return this.firstName + '.' + this.lastName;
    };
};
