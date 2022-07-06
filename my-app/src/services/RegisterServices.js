import axios from "axios";

export default class RegisterServices{
    add(value){
        axios.post('http://localhost:3000/chat/chat/user', value)
    }
    verify(userid){
            axios.get(`http://localhost:3000/chat/chat/verify/${userid}`, userid)
    }
}