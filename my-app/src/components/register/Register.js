import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import RegisterServices from '../../services/RegisterServices';
import './regis.css'
import * as yup from "yup";
import {useFormik} from 'formik'
const Register=(props)=> {


    const [loading, setLoading] = useState(false);
    const schema = yup.object({
       
        email: yup
          .string()
          .email()
          .required('Please Enter your Email'),
          phone: yup.string()
          .required("required")
          .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
          .min(10, "to short")
          .max(10, "to long"),
          password: yup
          .string()
          .required('Please Enter your password')
          // .matches(
          //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          // )
        
      });
       
 const {handleSubmit, handleChange,errors}=useFormik({
    initialValues:{
       email:'',
       phone:'',
       password:'',
    },
    validationSchema:schema, 
    onSubmit: values=>{
       let registerServices=new RegisterServices();
       registerServices.add(values)
       
       console.log(values);
      // setLoading(true)
    }
})
       if(loading){
        return <Redirect to='/verify'/>
       }
        return (
            
             <div className='regisbox'>
            <form onSubmit={handleSubmit}>
            <div className='loginbox'> 
            <div className='regis' > <input 
             
             name='email' 
             onChange={handleChange}
             placeholder='email'/>
             <div>{errors.email ? errors.email : null} </div>
             </div>
             <div className='regis' > <input 
             name='phone'
             onChange={handleChange}
             placeholder='phoneNumber'/>
             <div> {errors.phone ? errors.phone : null}</div>
             </div>
             
            <div className='regis' > <input 
            name='password'
            onChange={handleChange} 
            placeholder='password'/></div>
           <div> {errors.password ? errors.password : null}</div>
           
           

             <div className='regis' > 
             
             <input  type='submit'/>
             </div>
                        
             </div>
            </form>


               </div>
                
          
        );
    }


export default Register;
