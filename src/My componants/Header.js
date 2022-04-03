import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import pic from '../images/logo.jpeg' 
import '../productform.css'


const Header = (prop) => {

    const[token,setToken]=useState();


    const btnChange=()=>
    {
        const tokenvalue=JSON.parse(localStorage.getItem('tokken'));
        if(!tokenvalue)
        {
            setToken("logged");

        }
        else{
            setToken("loggedout");
        }
        console.log(token);


    }
    const btnlogout=()=>
    {
     localStorage.removeItem("tokken");
    }

  return (
    <div className="App">
   <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"10px 50px"}}>
        <Link className="navbar-brand" to="/menu"><img src={pic} width="50"/>CMS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/active">Active Orders</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/history">Order history</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/confirm">Confirm Order</Link>
            </li>
            <li className="nav-item">
                {
                !localStorage.getItem('tokken') ?  <Link className="nav-link btn btn-success text-white" to="/login" onClick={btnChange}>Login</Link> : <button className="nav-link btn btn-sm btn-danger text-white"  onClick={btnlogout}>Logout</button>
                }
            </li>
            
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header
