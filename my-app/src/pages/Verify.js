import { Component } from "react";
import { Link } from "react-router-dom";
import { notify } from 'react-notify-toast'
import { register } from "../services/LoginServices";
import './style.css'
class Verify extends Component{ 
 state ={
    confirming:true
 }
 componentDidMount = () => {
    //const { id } = this.props.match.params

    
   //  fetch(.verify("1"))
   //    .then(res => res.json())
   //    .then(data => {
   //      this.setState({ confirming: false })
   //      notify.show(data.msg)
   //    })
   //    .catch(err => console.log(err))
  }
     render(){ 
    return (
     <div className="verifyPage">
        <div className="verifyinfos">
            {
                this.state.confirming? <span> sorun var</span> :  <Link to='/' className="btn-verify"> <button>giriş sayfasına git</button></Link>
            }
        
       
         </div>
         </div>
    )
}}

export default Verify;
