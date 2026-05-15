# Real-Time Chat App_web-socket

A real-time chat application built using **HTML**, **CSS**, **JavaScript**, and **Socket.IO** as well as **JSExpress** with an improved responsive UI design.



## Features

- ⚡ Real-time messaging using Socket.IO
- ✍️ Typing indicator
- 🚀 Send messages instantly
- ⌨️ Press `Enter` to send messages
- 📱 Mobile-friendly design
- 🔄 Auto-scrolling chat window
- 🟢 Online status indicator
- 💎 Clean layout




## Technologies Used

- HTML5
- CSS3
- JavaScript
- Socket.IO



## 📂 Project Structure

```bash
project-folder/
│
├── index.html
├── server.js
└── README.md
```



### Install dependencies

```bash
npm init -y 
```

```bash
npm i express  
```

```bash
npm i nodemon
```

```bash
npm socket.io
```



## Required Packages



```bash
Install Socket.IO and Express:
```



## Example Server (`server.js`)

```js
const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(4000, () => {
  console.log("Listening on port 4000");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (socket) => {
  console.log("Made socket connection");

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
```


## Contributing

Pull requests are welcome.

If you would like to improve this project, feel free to fork the repository and submit a PR.



## Author

Developed by **Sawglay**

