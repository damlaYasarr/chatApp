const socketIO= require('socket.io')
const formatMessage=require('../../utils/messages')
const db =require('../helpers/db')
const moment=require('moment')
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
  } = require('../../utils/users');
const socketserver=server=>{
    const botName='dsdsfs'
    const io=socketIO(server); 
  
    io.on('connection', socket => {
        console.log("connected");
       
        

        socket.on("joinRoom", ({ name, room }) => {
            
                const user = userJoin(socket.id, name, room);
          
                socket.join(user.room);
            
          
          
             
      //Server msj sender
          socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));
      
          // Broadcast when a user connects
          socket.broadcast.to(user.room).emit(
             'message',
              formatMessage(botName, `${user.name} has joined the chat`)
            );
      
         // Send users and room info
          io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          });
        });
      
        // Listen for chatMessage
        socket.on('chatmessage',(msg) => {
          const x="damla"
          //const user = getCurrentUser(socket.id);
           
           const res=JSON.parse(JSON.stringify(msg))
           console.log("burası res",res)
           var time=moment().format('h:mm a')
           db.query(
            `INSERT INTO msg (detail, createdat) VALUES ('${res}' ,'${time}')  RETURNING detail ,createdat`).then((_)=>{

              io.emit('message', formatMessage(x, msg));
            }).catch(console.log)
          
         
            
        });
      
        // Runs when client disconnects
        socket.on("disconnect", () => {
          const user = userLeave(socket.id);
      
          if (user) {
            io.to(user.room).emit(
              'message',
              formatMessage(botName, `${user.name} has left the chat`)
            );
      
            // Send users and room info
            io.to(user.room).emit('roomUsers', {
              room: user.room,
              users: getRoomUsers(user.room)
            });
          }
        });
      });
}
module.exports=socketserver