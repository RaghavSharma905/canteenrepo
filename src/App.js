import logo from './logo.svg';
import './App.css';
import Login from './My componants/Login';
import Header from './My componants/Header';
import Menu from './My componants/Menu';
import Active from './My componants/Active';
import Confirmed from './My componants/Confirmed';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate  
} from "react-router-dom";
import Admin_menu from './My componants/Admin_menu';
import { useState } from 'react';



const productDetails = JSON.parse(localStorage.getItem("product"));

function App() {

  const User={
    name:"user001",
    password:"user@001"
  };
  const Admin={
    name:"admin001",
    password:"admin@002"
  };
  localStorage.setItem("User", JSON.stringify(User));
  localStorage.setItem("Admin", JSON.stringify(Admin));

  

  const productDetails = JSON.parse(localStorage.getItem("product"));

  let activeDetails=[];
  if(localStorage.getItem("Active"))
  {
    activeDetails = JSON.parse(localStorage.getItem("Active"));
  }
  

  const [activeId,setactive]=useState(activeDetails);
  const [activeTime,setTimeactive]=useState("");
    useEffect(() => {
      if(activeTime!="")
      {
        setTimeout(() => {
          alert("your order is prepared");
        }, activeTime);
      }
      
      },[activeTime]);

      let confirmPro=[];
      if(localStorage.getItem("Confirmed"))
      {
        confirmPro = JSON.parse(localStorage.getItem("Confirmed"));
      }
      const[confirmProduct,setconfirm]=useState(confirmPro);

  const AddActiveorder =(id)=>
  {
      const newactive=[...activeId,id]
      setactive(newactive);
      localStorage.setItem("Active", JSON.stringify(activeId));
      const proboj=productDetails.find(x => x.id == id);
      setTimeactive(proboj.pro_time);
      const newRecord={...proboj, month:new Date().getMonth().toString()}
      setTimeout(() => {
        const newconfirm=[...confirmProduct,newRecord];
        setconfirm(newconfirm);
        localStorage.setItem("Confirmed",JSON.stringify(newconfirm));

      }, proboj.pro_time)
   }

   
   const checkuser = (name,pass)=>
   {
          const User=JSON.parse(localStorage.getItem("User"));
          const Admin=JSON.parse(localStorage.getItem("Admin"));
          if(User.name===name && User.password===pass)
          {
            localStorage.setItem("tokken","logged");
          }
          else if(Admin.name===name && Admin.password===pass)
          {
            localStorage.setItem("tokken","adminlogged");
          }
          else{
            alert("Please Enter correct login details");
          }
    }

  


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/login" element={ 
          localStorage.getItem('tokken') ?  <Navigate  to="/" /> :<Login checklogin={checkuser}/>
          } />
        <Route exact path="/menu" element={
            !localStorage.getItem('tokken') ?  <Navigate  to="/login" /> : [<Menu products={productDetails} addOrder={AddActiveorder}/>,<Admin_menu />]
          } />
        <Route exact path="/active" element={
          !localStorage.getItem('tokken') ?  <Navigate  to="/login" /> : <Active product={productDetails} active={activeId} />
        } />
        <Route exact path="/confirm" element={
          !localStorage.getItem('tokken') ?  <Navigate  to="/login" /> : <Confirmed product={confirmPro} />
        } />
      </Routes>
    </div>
  );
}

export default App;
