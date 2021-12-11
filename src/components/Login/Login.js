import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Login.scss'
import logo from './logo.jpg';
import login from './login.jpg';
const Login = () => {

   const [userval,setuserval] = useState("");
   const [passval,setpassval] = useState("");
   const [usertype,setusertype]=useState("");
   function handlesubmit(event) {
        event.preventDefault();
    }
    return (
        <div className='main-login'>
               <div className='login-container'>
                   <div className='left-side'>
                       <div className='img-class'>
                           <img src={logo} id='img-id' alt="Sign Up" />
                       </div>
                    <form onSubmit={handlesubmit}>
                        <label for="username">Username :</label>
                        <input placeholder='Enter your Username' type="text" id='username' value={userval}
                        onChange={(e)=>{setuserval(e.target.value)}}/>
                        <label for="pwd">Password :</label>
                        <input placeholder='Enter your Password' type="password" id='pwd' value={passval}
                        onChange={(e)=>{setpassval(e.target.value)}}/>
                        <label for="usertype">User Type :</label>
                        <select id='usertype'>
                            <option value="default" disabled selected>User Type</option>
                            <option value={usertype} onChange={(e)=>{setusertype(e.target.value)}}>Faculty</option>
                            <option value={usertype} onChange={(e)=>{setusertype(e.target.value)}}>Student</option>
                            <option value={usertype} onChange={(e)=>{setusertype(e.target.value)}}>Admin</option>
                        </select>
                        <button type='submit' id='sub_but'>Login</button>
                    </form>
                    <div className="footer">
                        <h5>Don't have an Account ? <Link to='/Register' className='link'>Register Now</Link> </h5>
                    </div>
                   </div>
                   <div className="right-side">
                       <div className="welcomenote">
                           <h3>Welcome Back !</h3>
                       </div>
                       <div className="welcomeImg">
                           <img src={login} alt="" id='wel-img-id' />
                       </div>
                   </div>
               </div>
        </div>
    );
}

export default Login;
