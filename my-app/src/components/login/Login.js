import './login.css'
import * as React from "react";
import  {useState} from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [infos, setInfos]= useState("");
    const [pass,setPass]=useState("");
 const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(infos, pass)  
 }


    return (
        <div className='header'>
            
            <form onSubmit={handlesubmit}>
            <div className='loginbox'> 
             <div className='logininput' > <input
             value={infos}
             onChange={(e)=>setInfos(e.target.value)}
             placeholder='phoneNumber or Email'/></div>
            <div className='logininput' > <input
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            placeholder='password'/></div>
           
            <Link to='damla'>üye değil misin</Link>

             <div className='logininput' > <input 
             style={{'backgroundColor':'green', 
              'color':'white'}}
             type='submit'/></div>
             </div>
            </form>
               
            


        </div>
    )
}

export default Login