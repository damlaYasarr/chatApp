import React from 'react';
import './regis.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            
               <div className='regisbox'>
 <form>
            <div className='loginbox'> 
             <div className='regis' > <input placeholder='phoneNumber'/></div>
             <div className='regis' > <input placeholder='email'/></div>
            <div className='regis' > <input placeholder='password'/></div>
           
           

             <div className='regis' > <input 
             type='submit'/></div>
             </div>
            </form>


               </div>
                
          
        );
    }
}

Register.propTypes = {};

export default Register;
