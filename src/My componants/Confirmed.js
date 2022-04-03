import React, { useState } from 'react'
import '../productform.css'

const Confirmed = (props) => {
    const [totaltime,settotal]=useState(0);

  return (
    <>
    <h2>Confirmed Orders</h2>
    <div className='container-block confirmbody'>
            <div className="row d-flex justify-content-center">
            <div className="col-md-8">
            <div className="card">
            <div className="invoice p-5">
            <h5 className='pull-left mb-3'><strong>Your Order has been Confirmed!</strong></h5> 
            <div className="border-bottom border-top table-responsive">
            <table className="table table-borderless">
            <tbody>
                {
                     props.product.map((pro) => { 
                         
                        // let time= parseInt(pro.pro_time);
                        // console.log(time);
                        // console.log(totaltime);
                        
                        //  settotal(time);
                         
                        return(
                            <tr>
                            <td width="20%"> <img src={pro.url} width="70" /> </td>
                            <td width="60%"> <span className="text-capitalize"><strong>{pro.pro_name}</strong></span>
                            <div className="product-time"><span>Preperation Time:- {pro.pro_time} mins</span> </div>
                            </td>
                            <td width="20%">
                            <div className="text-right"> <span className="font-weight-bold">{pro.pro_price}</span> </div>
                            </td>
                            </tr>
                        )

                     })
                }
           
           
            </tbody>
            </table>
            </div>
            <div className="row d-flex justify-content-end">
                <div className="col-md-5">
                    <table className="table table-borderless">
                    <tbody>
                    <tr className="border-bottom">
                    <td>
                    <div className="text-left"> <span className="text-muted">Subtotal</span> </div>
                    </td>
                    <td>
                    <div className="text-right"> <span>Rs.{totaltime}</span> </div>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div> 

    
    </>
  )
}

export default Confirmed