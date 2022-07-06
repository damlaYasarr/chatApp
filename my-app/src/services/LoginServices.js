import axios from "axios";


export default class LoginServices{
    add(values){
        axios.post('http://localhost:3000/chat/chat/login',values)
    }
    isActive(value){
        axios.get('http://localhost:3000/chat/chat/IsActive', value)
    }
 
}

