
const db =require('./../backend/helpers/db')
const users = [];

// Join user to chat

function userJoin(id, name, room) {
  try{
    const user = { id, name, room };
   
    users.push(user);
  
    return user;
  }catch(error){
    console.log(error)
  }
 
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
 console.log(users.username)
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};