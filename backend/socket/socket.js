const socketIO = require('socket.io')

const db = require('../helpers/db')
const moment = require('moment')
const {postmsg, getmsgHistory}=require('./../controller/msg')
const {addUser, removeUser, getUser }=require('./../utils/user')
const socketserver = server => {

  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log("connected", socket.id);

    socket.on('join', ({name, userid}) => {
        const {error, user}=addUser({
          socket_id:socket.id,
          name, userid
        })
        socket.join(userid); 
        if(error){
          console.log("user just join")
        }else{
          console.log("join user", user)
        }
      
    })
    socket.emit('message', 'damla naber')

    // Listen for chatMessage
    socket.on('chatmessage', (msg) => {
      const user=getUser(socket.id); 
      

      postmsg(msg,user.userid).then(result=>{
        io.to(user.user.id).emit('message', result); 
      })
      

    });
    socket.on('get-msg-history', userid=>{
    getmsgHistory(userid).then(result=>{
      socket.emit('output-msg', result)
    })
    })
    socket.on('disconnect', () => {
      console.log("server just left")
      const user=removeUser(socket.id)
    })
  });





}
module.exports = socketserver