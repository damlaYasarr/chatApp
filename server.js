const express=require('express');
const path=require('path');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const server = require('http').createServer(app);
const socketIO=require('./backend//socket/socket')
const client =require('./backend/helpers/db');
const routes=require('./backend/router/index')

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors());
app.use(bodyParser.json());
client.connect(() =>{
  console.log("db bağlndı")
  });


app.use('/chat', routes)


const PORT=3000;

 const expressserver= server.listen(PORT, ()=>{ console.log("server working")})

socketIO(expressserver);  