let express = require('express');
let socket = require('socket.io');

/**  app setup **/
let app = express();

/**  server setup **/
let server = app.listen(4000, () => {
    console.log("project is running on localhost:4000");
})

/** Route setup */
app.get("/", (res, req) => {
    req.sendFile(__dirname + "/public/index.html");
});

/** Socket setup */
let io = socket(server)
io.on('connection', (socket) => {
    console.log('Socket Connection is connected');
})