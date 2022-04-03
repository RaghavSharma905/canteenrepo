import React from 'react'
import { useState } from 'react'
import { createRoutesFromChildren } from 'react-router';
import '../productform.css'

const Admin_menu = () => {
    const [product, setproduct] = useState({
        pro_name:"",
        pro_price:"",
        pro_time:"",
        pro_image:""
    });

    const handleinput =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setproduct({...product,[name]:value});


    }
    const [file, setFile] = useState("");
    const handlefile=(e)=>{
        const name=e.target.name;
        const value= e.target.value;
        const fileurl=URL.createObjectURL(e.target.files[0]);
        //const fileurl=e.target.files[0];
        console.log(e.target.files[0]);
        
        let filedata={...product,[name]:value,url:fileurl}
        setproduct(filedata);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newRecord={...product, id:new Date().getTime().toString()}
        setproduct({pro_name:"",pro_price:"",pro_time:"",pro_image:""});
        let a = JSON.parse(localStorage.getItem("product"));
        let b = [];
        if(a !== null){
            b = JSON.parse(localStorage.getItem("product"));
        }
        b.push(newRecord);
        localStorage.setItem("product", JSON.stringify(b));
    }

  return (
    <div className='productForm'>
    <h2>Add Products</h2>
    <div className="form" style={{textAlign:'center'}}>
    
     <form onSubmit={handleSubmit} >
     <table style={{margin:"0px auto", borderCollapse:"unset"}} className="adminForm">
       <div className="input-container">
        <tr>
         <td ><label>Name </label></td>
         <td ><input type="text" name="pro_name" className="form-control" value={product.pro_name} onChange={handleinput} required /></td>
         </tr>
       </div>
       
       <div className="input-container">
        <tr>
        <td><label>Product price </label></td>
        <td><input type="number" name="pro_price" className="form-control" value={product.pro_price} onChange={handleinput} required /></td>
        </tr>
       </div>
       
       <div className="input-container">
        <tr>
         <td><label>Preperation time(mins)</label></td>
         <td><input type="number" name="pro_time"  className="form-control" value={product.pro_time} onChange={handleinput} required /></td>
        </tr>
       </div>
       
       <div className="input-container">
         <tr>
         <td><label>Product image</label></td>
         <td><input type="file" name="pro_image"  className="form-control" value={product.pro_image} onChange={handlefile} required /></td>
         </tr>
       </div>
       
       <div className="button-container">
        <tr>
        <td></td>   
        <td><input type="submit" className='btn btn-primary' /></td>
        </tr>
       </div>
    </table>
    </form>
    </div>
    </div>
  )
}

export default Admin_menu