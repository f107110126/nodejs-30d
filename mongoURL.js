module.exports = function (options) {
    let host = (options.host) ? options.host : false;
    let port = (options.port) ? options.port : 27017;
    let user = (options.user) ? options.user : false;
    let password = (options.password) ? options.password : false;
    let database = (options.database) ? options.database : '';
    let authMechanism = (options.authmechanism) ? options.authMechanism : 'DEFAULT';
    let auth, auth_enabled = user && password && authMechanism;
    if (host === false) return false;
    if (auth_enabled)
        auth = encodeURIComponent(user) + ':' + encodeURIComponent(password);
    let url = 'mongodb://';
    if (auth_enabled) url += auth + '@';
    url += host;
    if (port) url += ':' + port;
    url += '/' + database;
    if (auth_enabled) url += '?authMechanism=' + authMechanism;
    return url;
}