let express = require('express');
let socket = require('socket.io');

/**  app setup **/
let app = express();

/**  server setup **/
let server = app.listen(4000, () => {
    console.log("project is running on localhost:4000");
})

