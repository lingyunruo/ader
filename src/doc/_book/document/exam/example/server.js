const PServer = require('../../../../../../p-server/src');
const path = require('path');

let server = new PServer({
    port: 8000,
    root: path.join(__dirname, './')
});