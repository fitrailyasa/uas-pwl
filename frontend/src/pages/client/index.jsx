import React from 'react';
import Header from '../../component/client/Header';
import Footer from '../../component/client/Footer';

function Home() {
    return (
        <>
            <Header />
            <div className="col-lg-12 mt-5 pt-5 form-wrapper">
                <section className="px-3 py-2">
                    <div className="row">
                        <div className="col-xl-2 col-md-6 col-6 mb-3">
                            <div className="card text-start rounded-4">
                                <div className="text-center p-2">
                                    <img height="100" className=""
                                        src="#"
                                        alt="produk" />
                                </div>
                                <div className="p-3 border-top">
                                    <h4 className="card-title">Kue</h4>
                                    <p className="card-text fw-bold">Rp. 20000</p>
                                    <a className="btn btn-sm btn-primary" href="{{ route('order.order', $produk->id) }}">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-6 mb-3">
                            <div className="card text-start rounded-4">
                                <div className="text-center p-2">
                                    <img height="100" className=""
                                        src="#"
                                        alt="produk" />
                                </div>
                                <div className="p-3 border-top">
                                    <h4 className="card-title">Kue</h4>
                                    <p className="card-text fw-bold">Rp. 20000</p>
                                    <a className="btn btn-sm btn-primary" href="{{ route('order.order', $produk->id) }}">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-6 mb-3">
                            <div className="card text-start rounded-4">
                                <div className="text-center p-2">
                                    <img height="100" className=""
                                        src="#"
                                        alt="produk" />
                                </div>
                                <div className="p-3 border-top">
                                    <h4 className="card-title">Kue</h4>
                                    <p className="card-text fw-bold">Rp. 20000</p>
                                    <a className="btn btn-sm btn-primary" href="{{ route('order.order', $produk->id) }}">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-6 mb-3">
                            <div className="card text-start rounded-4">
                                <div className="text-center p-2">
                                    <img height="100" className=""
                                        src="#"
                                        alt="produk" />
                                </div>
                                <div className="p-3 border-top">
                                    <h4 className="card-title">Kue</h4>
                                    <p className="card-text fw-bold">Rp. 20000</p>
                                    <a className="btn btn-sm btn-primary" href="{{ route('order.order', $produk->id) }}">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-6 mb-3">
                            <div className="card text-start rounded-4">
                                <div className="text-center p-2">
                                    <img height="100" className=""
                                        src="#"
                                        alt="produk" />
                                </div>
                                <div className="p-3 border-top">
                                    <h4 className="card-title">Kue</h4>
                                    <p className="card-text fw-bold">Rp. 20000</p>
                                    <a className="btn btn-sm btn-primary" href="{{ route('order.order', $produk->id) }}">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-6 mb-3">
                            <div className="card text-start rounded-4">
                                <div className="text-center p-2">
                                    <img height="100" className=""
                                        src="#"
                                        alt="produk" />
                                </div>
                                <div className="p-3 border-top">
                                    <h4 className="card-title">Kue</h4>
                                    <p className="card-text fw-bold">Rp. 20000</p>
                                    <a className="btn btn-sm btn-primary" href="{{ route('order.order', $produk->id) }}">Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
            <Footer />
        </>
    );
}

export default Home;
