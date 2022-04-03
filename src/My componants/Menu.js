import React from 'react';
import '../productform.css'


const Menu = (props) => {
  

  return (
    <div className='container'>
    <h1>Menu</h1>
    <div className="wrapper">
    <div className="container">
        <div className="row g-1">
            {
                props.products.map((pro) => {
                return (
                <div className="col-md-3" key={pro.id}>
                <div className="card p-3">
                    <div className="text-center"> <img src={pro.url} classaName="product_image img-responsive" height="120"/> </div>
                    {
                        URL.revokeObjectURL(pro.url)
                    }
                    <div className="product-price"> <span className="font-weight-bold d-block">Price:- {pro.pro_price} Rs.</span><span style={{fontWeight:"bold",textTransform:"capitalize"}}>{pro.pro_name}</span>
                        <div className="buttons  flex-row">
                             <button className="btn btn-success cart-button btn-block center-block" onClick={()=>{props.addOrder(pro.id)}}>Order Now</button>
                        </div>
                        <div className="time">Time(mins):- <small className='font-weight-bold' style={{fontWeight:"bold"}}>{pro.pro_time}</small></div>
                    </div>
                </div>
                </div>  
                ) 
                })

            
            }
       
            
                   
        </div>
    </div>
</div>
    </div>

  )
}

export default Menu