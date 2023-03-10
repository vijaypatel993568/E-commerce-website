import React, { useState,useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import LeftNav from './LeftNav'
import { getCheckout, deleteCheckout, updateCheckout } from "../../Store/ActionCreators/CheckoutActionCreators"
import { useNavigate,useParams } from 'react-router-dom';

export default function AdminSingleCheckout() {
    var [data,setdata] = useState({})
    var [orderstatus,setorderstatus] = useState("")
    var [paymentstatus,setpaymentstatus] = useState("")
    var Checkout = useSelector((state) => state.CheckoutStateData)
    var {id} = useParams()
    var dispatch = useDispatch()
    var navigate = useNavigate()
    
    function getAPIData(){
        dispatch(getCheckout())
        var d = Checkout.find((item)=>item.id===Number(id))
        if(d){
            setdata(d)
            setorderstatus(d.paymentorderstatus)
            setpaymentstatus(d.paymentstatus)
        }
    }
    function update(){
        dispatch(updateCheckout({...data,paymentstatus:paymentstatus,orderstatus:orderstatus}))
        setdata((old)=>{
            return{
                ...old,
                ['orderstatus']:orderstatus,
                ['paymentstatus']:paymentstatus
            }
        })
    }
    function getData(e){
        if(e.target.name==="orderstatus")
        setorderstatus(e.target.value)
        else
        setpaymentstatus(e.target.value)
    }
    useEffect(() => {
       getAPIData()
    }, [Checkout.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Single Checkout </h5>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                ID
                            </div>
                            <div className="w-50 p-3 border">
                                {data.id}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                User Id
                            </div>
                            <div className="w-50 p-3 border">
                                {data.userid}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Payment Mode
                            </div>
                            <div className="w-50 p-3 border">
                                {data.paymentmode}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Payment Status
                            </div>
                            <div className="w-50 p-3 border">
                                {data.paymentstatus}
                               {
                                data.paymentstatus!=="Done"?
                                <select name='paymentstatus' onChange={getData} className='form-control'>
                                <option value="Pending">Pending</option>
                                <option value="Done">Done</option>
                            </select>:""
                               }
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Order Status
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>{data.orderstatus}</p>
                               {
                                data.orderstatus!=="Delivered"?
                                <select name='orderstatus' onChange={getData} className='form-control'>
                                <option value="Order Placed">Order Placed</option>
                                <option value="Packed">Packed</option>
                                <option value="Ready To Ship">Ready To Ship</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for Delivery">Out for Delivery</option>
                                <option value="Delivered">Delivered</option>
                                
                            </select>:""
                               }
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Total Amount
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>&#8377;{data.totalAmount}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Shipping Amount
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>&#8377;{data.shippingAmount}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Final Amount
                            </div>
                            <div className="w-50 p-3 border">
                                <p className='w-50'>&#8377;{data.finalAmount}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-50 p-3 border">
                                Date
                            </div>
                            <div className="w-50 p-3 border">
                                {data.time}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="w-100 p-3 border">
                                {
                                    data.orderstatus!=="Delivered" || data.paymentstatus!=="Done"?
                                    <button className='btn btn-secondary w-100' onClick={update}>Update</button>:
                                    ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
