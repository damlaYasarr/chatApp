import './chat.css'
import queryString from "query-string";
import io from "socket.io-client";



import React, { useEffect, useState } from "react";

let socket;
const Chat = () => {


  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
 

  const ENDPOINT = "http://localhost:3000";
  useEffect(() => {
    socket = io(ENDPOINT, {
      cors: {
        origin: "http://localhost:3000",
        credentials: true
      }, transports: ['websocket']
    });

    socket.on('connection', () => {
      console.log("connnection okey")



      socket.emit('join', () => {
        console.log("user just joint")
      })
      return () => {
        socket.emit('disconnect');

        socket.off();
      }

    })
  }, [ENDPOINT])
  //alttaki giden msjlar
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages]);
  const handlecHange = (e) => {

    setMessage(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages((messages) => [...messages, message])
    setMessage("")
    if (message) {
      //alttaki gelen msj
      socket.emit('chatmessage', message, () => setMessage(""))
    }

  }
  return (
    <div class="chat-container">
      <header class="chat-header">
        <h1><i class="fas fa-smile"></i> ChatCord</h1>
        <a id="leave-btn" class="btn">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2>
          <h3><i class="fas fa-users"></i> Users</h3>
          <ul id="users"></ul>
        </div>
        <div className="chat-messages">

          {messages.map((message, i) => (

            <p key={i} >

              {message}
            </p>
          ))}

        </div>
      </main>
      <div class="chat-form-container">
        <form onSubmit={handleSubmit}>
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
            value={message}
            onChange={handlecHange}
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>
  )

}

export default Chat