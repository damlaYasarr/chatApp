import './login.css'
import * as React from "react";
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';
import  { login } from '../../services/LoginServices';
//leave the room is logout
class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }
    constructor(){
      
      super()
        this.state={
          email:'',
          password:'',
          errors:{}
        }
      this.onChange=this.onChange.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }

   
   
    onChange(e){
      this.setState({[e.target.name]: e.target.value})
    }
     
    onSubmit(e){
      e.preventDefault(); 
      
      const user={
        email:this.state.email,
        password:this.state.password
      }
      login(user).then(res=>{
        
        localStorage.setItem('users', JSON.stringify(this.state));
        if(res){
          this.props.history.push('/chat')
        }
      })
    }
   render(){ 
   
  return (
    <div className='header'>

      <form onSubmit={this.onSubmit}>
        <div className='loginbox'>
          <div className='logininput' >
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
              placeholder='Email enter' /></div>
          <div></div>
          <div className='logininput' >
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
              placeholder='password' /></div>
          <div></div>
          <Link to='damla'>üye değil misin</Link>

          <div className='logininput' >

            <input
              style={{
                'backgroundColor': 'green',
                'color': 'white'
              }}
              type='submit' /></div>
        </div>
      </form>




    </div>
  )
}}

export default withRouter(Login)