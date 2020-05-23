const Server = require('dono-server');
const path = require('path');

let server = new Server({
    root: path.join(__dirname, '../target'),
    port: 9090
});