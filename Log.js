let log = {
    info: (info) => {
        console.log('Info: ' + info);
    },
    warning: (warning) => {
        console.log('Warning: ' + warning);
    },
    error: (error) => {
        console.log('Error: ' + error);
    }
};

module.exports = log;
// this is importan, if the module used for load must have this line