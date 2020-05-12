const Server = require('dono-server');
const path = require('path');

let server = new Server({
    root: path.join(__dirname, '../lib'),
    port: 9090
});