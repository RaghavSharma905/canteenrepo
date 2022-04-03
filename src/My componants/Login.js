import React from 'react';
import { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    
      function handleSubmit(event) {
          event.preventDefault();
          props.checklogin(email,password);
          setEmail("");
          setPassword("");
          
        }

        let loginstyle={
          padding: "20px",
          width: "400px",
          textAlign: "center",
          margin: '0px auto',
          border:"5px solid lightgray",
          marginTop:"50px"
        }
  return (
  <div className="Login" style={loginstyle} >
    <div className="form" onSubmit={handleSubmit}>
     <form>
       <div className="input-container" style={{margin:"10px",display:"flex"
      ,justifyContent:"space-around"}}>
         <label>Username </label>
         <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' required />
       </div>
       <div className="input-container" style={{margin:"10px",display:"flex"
      ,justifyContent:"space-around"}}>
         <label>Password </label>
         <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'  required />
       </div>
       <div className="button-container">
         <input type="submit" className='btn btn-primary' />
       </div>
     </form>
   </div>

    </div>

  );
}

export default Login