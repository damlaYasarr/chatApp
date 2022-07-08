const socketIO = require('socket.io')

const db = require('../helpers/db')
const moment = require('moment')

const socketserver = server => {

  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log("connected", socket.id);
    socket.on('join', () => {
      //burada katılan user'ları almamız lazım
      console.log("user just join")
    })
    socket.emit('message', 'hiben server')

    // Listen for chatMessage
    socket.on('chatmessage', (msg) => {


      console.log(msg)

    });
    socket.on('disconnect', () => {
      console.log("server just left")
    })
  });





}
module.exports = socketserver