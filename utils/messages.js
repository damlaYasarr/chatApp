//axios buraya gelmeli. 


const moment=require('moment')
function formatMessage(username,text){
      
    var time=moment().format('h:mm a')
  
     return {
        username, 
        text,
        time
     }
}

module.exports= formatMessage