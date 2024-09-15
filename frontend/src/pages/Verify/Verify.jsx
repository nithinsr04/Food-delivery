import React, { useContext, useEffect, useState } from 'react'
import './Verify.css';
import axios from "axios";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    
    const verifyPayment = async (req,res) =>{
        const response = await axios.post(`${url}/api/order/verify`,{success,orderId});
        if(response.data.success){
            alert("order placed successfully, redirecting to orders page");
            navigate("/myorders");
        }
        else{
            alert("Payment failed");
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  )
}

export default Verify;