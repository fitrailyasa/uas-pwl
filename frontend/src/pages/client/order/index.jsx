import React from 'react';
import logo from '../../../assets/logo.png';
import Layout from '../../../components/client/Layout';

function Produk() {
    return (
        <>
            <Layout>
                <div className="col-lg-12 form-wrapper">
                    <div className="vh-100 pt-5 mt-5">
                        <section className="px-4 body-section d-flex flex-column gap-3 pt-3" style={{ paddingBottom: '' }}>
                            <a href="/"
                                className="d-flex align-items-center bg-white rounded-4 px-4 py-2 ">
                                <div className="d-flex">
                                    <img src={logo} alt="ikon"
                                        style={{ width: '80px' }} className="p-1 rounded-circle" />
                                </div>
                                <div className="col d-flex flex-column justify-content-between">
                                    <span className="fw-bolder py-1">Nama Produk</span>
                                    <div className="font-weight-normal text-black">
                                        <span>Deskripsi</span>
                                    </div>
                                </div>
                            </a>
                        </section>
                        <section className="px-4 body-section d-flex flex-column gap-3 pt-3" style={{ paddingBottom: '' }}>
                            <a href="/"
                                className="d-flex align-items-center bg-white rounded-4 px-4 py-2 ">
                                <div className="d-flex">
                                    <img src={logo} alt="ikon"
                                        style={{ width: '80px' }} className="p-1 rounded-circle" />
                                </div>
                                <div className="col d-flex flex-column justify-content-between">
                                    <span className="fw-bolder py-1">Nama Produk</span>
                                    <div className="font-weight-normal text-black">
                                        <span>Deskripsi</span>
                                    </div>
                                </div>
                            </a>
                        </section>
                    </div>
                </div >
            </Layout>
        </>
    );
}

export default Produk;
