import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/client/Layout';
import logo from '../../assets/logo.png';

function Login() {


    return (
        <>
            <Layout>
                <div className="col-lg-12 mt-5 pt-5 form-wrapper vh-100">
                    <section className="px-3 py-2 d-flex justify-content-center">
                        <div className="text-white">
                            <div className=" text-center">
                                <img src={logo} alt="logo" className="img-fluid" />
                                <h1 className="text-center">Login</h1>
                                <form className="col-12">
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder='email' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder='password' />
                                    </div>
                                    <a className="btn btn-primary" href="/">Login</a>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}

export default Login;
