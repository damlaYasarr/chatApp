import axios from "axios";



export  const login = user => {
    return axios.post('http://localhost:3000/chat/chat/login', {
        email: user.email,
        password: user.password
    }).then(res => {
        localStorage.setItem('user', res.data)
        return res.data
    }).catch(err => {
        console.log(err)
    })
}
export const register=newUser=>{
    return axios.post('http://localhost:3000/chat/chat/user', {
        email:newUser.email, 
        phone:newUser.phome,
        password:newUser.password
    }).then(res=>{
        console.log('regstered')
    })
}
