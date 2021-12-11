import React,{useState} from 'react'
import './Register.scss'
import { Link } from 'react-router-dom';
// import logo from './logo.jpg';
import regimg from './Form-Registration.jpg'
import accimg from './Account-Registration.jpg'
const Register = () => {
    const handlesubmit=(e)=>
    {
        e.preventDefault();
    }
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [username,setusername]=useState("");
    const [pwd1,setpwd1]=useState("");
    const [usertype,setusertype]=useState("");
    const [pwd2,setpwd2]=useState("");
    return (
        <div className='main-register'> 
             <div className="left-side">
                    <div className="header">
                        <img src={regimg} alt="" id='logo-img' />
                    </div>
                    <div className="body" >
                        <img src={accimg} alt="" id='reg-img' />                    
                    </div>
                    <p >You can fill in the required details and Login into our Website.
                        <br/> All the details are encrypted and stored 
                      <br/>We Love Privacy
                      <br /> Please Create an Account and Login to View More
                    </p>
             </div>
             <div className="right-side">
                 <div className="top-right">
                        <h5 id='top-right-corner'>Already have an Account ?<Link to='/Login' id='link-signin'>Sign In</Link> </h5>
                 </div>
                 <div className="body-right">
                     <div className="container">
                         <h4>Create Account</h4>
                        <form onSubmit={handlesubmit}>        
                         <div className="input-group">
                             <h5>Full Name</h5>
                             <input type="text" name="Fname" id="fname" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                         </div>
                         <div className="input-group">
                             <h5>User Category</h5>
                             {/* <input type="text" name="user_type" id="us_type" value={usertype} onChange={(e)=>{setusertype(e.target.value)}} /> */}
                            <select id='usertype'>
                            <option value="default" disabled selected>Select User Type</option>
                            <option value={usertype} onChange={(e)=>{setusertype(e.target.value)}}>Faculty</option>
                            <option value={usertype} onChange={(e)=>{setusertype(e.target.value)}}>Student</option>
                            <option value={usertype} onChange={(e)=>{setusertype(e.target.value)}}>Admin</option>
                        </select>
                         </div>
                         <div className="input-group">
                             <h5>Email</h5>
                             <input type='email' name="Email" id="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                         </div>
                         <div className="input-group">
                             <h5>User Name</h5>
                             <input type='text' name="username" id="usnm" value={username} onChange={(e)=>{setusername(e.target.value)}} />
                         </div>
                         <div className="input-group">
                             <h5>Password</h5>
                             <input type='password' name="password" id="pwd" value={pwd1} onChange={(e)=>{setpwd1(e.target.value)}}/>
                         </div>
                         <div className="input-group">
                             <h5>Confirm Password</h5>
                             <input type="password" name="c_password" id="c_pwd" value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} />
                         </div>
                         <input type="submit" value="Submit" id='sbtn' />
                        </form>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Register;
