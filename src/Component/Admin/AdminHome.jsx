import React from 'react'
import { Link } from 'react-router-dom'
import LeftNav from './LeftNav'

export default function AdminHome() {
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="/assets/images/adminpic.jpeg" height="420px" alt="" />
                            </div>
                            <div className="col-md-7">
                                <h5 className='bg-secondary text-light text-center'>Admin Home</h5>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Name</div>
                                    <div className='border  p-3 w-50'>Vijay Kumar Patel</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>User Name</div>
                                    <div className='border  p-3 w-50'>admin</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Email</div>
                                    <div className='border  p-3 w-50'>admin@gmail.com</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Phone</div>
                                    <div className='border  p-3 w-50'>Vijaypatel993568@gmail.com</div>
                                </div>
                                <div className='d-flex'>
                                    <div className='border  p-3 w-50'>Role</div>
                                    <div className='border  p-3 w-50'>Admin</div>
                                </div>
                                <div className='mt-3'>
                                    <Link to="/update-profile" className='btn btn-secondary w-100'>Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
