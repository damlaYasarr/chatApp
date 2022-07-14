import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

import './regis.css'
import * as yup from "yup";
import {useFormik} from 'formik'
const Register=(props)=> {


   

        return (
            
             <div className='regisbox'>
            <form >
            <div className='loginbox'> 
            <div className='regis' > <input 
             
             name='email' 
           
             placeholder='email'/>
             <div> </div>
             </div>
             <div className='regis' > <input 
            
             placeholder='phoneNumber'/>
             <div></div>
             </div>
             
            <div className='regis' > <input 
            name='password'
           
            placeholder='password'/></div>
           <div></div>
           
           

             <div className='regis' > 
             
             <input  type='submit'/>
             </div>
                        
             </div>
            </form>


               </div>
                
          
        );
    }


export default Register;
