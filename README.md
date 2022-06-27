# chatApp

it is simple chatApp without backend

npm install 
npm run dev 


# dependencies
- socket.io
- expressjs
- moment
- socket.io-client
- http 
- nodemon






# how to learn socket
 - at first there are three important parameter used
- connection: Whenever a user will join the room from the home page, connection event will be fired and everyone in the room will get the message that the user had joined, and the user is added to that room data.
- sendMessage: Now when any of the users will send the message from input in chat, sendmessage event will get fired and the message is added inside the array of messages with the username.
- disconnect: When the user leaves the chat the disconnect event will get fired and the user is removed from the array of users of that room and the message will be sent that the user had left the chat.
- and then ; 
- we can use these parameter as we want. and these parameters is used in the client to provide communicate with server.  
