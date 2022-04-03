import React from 'react'
import { useState } from 'react'
import '../productform.css'
import { useEffect } from 'react'

const Active = (props) => {
    
  
  return (
    
    <>
    <h2 style={{margin:"20px auto"}}>Active Orders</h2>
    <table className=" table ActiveTable">
    <thead>
        <tr>
        <th scope="col">Product Image</th>    
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Time</th>
        </tr>
    </thead>
    <tbody>
        {
            props.active.map((pro) => {
            const proboj=props.product.find(x => x.id == pro);
            return (
            <tr>
            <td><img src={proboj.url} classaName="product_image" width="50" height="50" /></td>
            <td>{proboj.pro_name}</td>
            <td>{proboj.pro_price}</td>
            <td>{proboj.pro_time}</td>
            </tr>
            )
        })
    }
   
    </tbody>
    </table>
    </>

  )

}
export default Active