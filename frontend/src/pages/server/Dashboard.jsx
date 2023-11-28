import React from 'react';
import Layout from '../../component/server/Layout';

function Dashboard() {
    return (
        <>
            <Layout>
                <div className="col-lg-12 form-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>10</h3>

                                    <p>Produk</p>
                                </div>
                                <a href="/admin/produk" className="small-box-footer">More info <i
                                    className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>10</h3>

                                    <p>Kategori</p>
                                </div>
                                <a href="/admin/kategori" className="small-box-footer">More info <i
                                    className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>10</h3>

                                    <p>Transaksi</p>
                                </div>
                                <a href="/admin/transaksi" className="small-box-footer">More info <i
                                    className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>10</h3>

                                    <p>User</p>
                                </div>
                                <a href="/admin/user" className="small-box-footer">More info <i
                                    className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;
