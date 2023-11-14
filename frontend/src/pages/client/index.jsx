import React from 'react';
import Layout from '../../component/client/Layout';
import Card from '../../component/Card';
import logo from '../../assets/logo.png';

function Home() {
    return (
        <>
            <Layout>
                <div className="col-lg-12 mt-5 pt-5 form-wrapper">
                    <section className="px-3 py-2">
                        <div className="row">
                            <Card gambar={logo} nama="Kue" harga="20000" link="http://localhost:3000" />
                            <Card gambar={logo} nama="Biskuit" harga="10000" link="http://localhost:3000" />
                            <Card gambar={logo} nama="Coklat" harga="15000" link="http://localhost:3000" />
                            <Card gambar={logo} nama="Kue" harga="20000" link="http://localhost:3000" />
                            <Card gambar={logo} nama="Biskuit" harga="10000" link="http://localhost:3000" />
                            <Card gambar={logo} nama="Coklat" harga="15000" link="http://localhost:3000" />
                        </div>
                    </section >
                </div >
            </Layout>
        </>
    );
}

export default Home;
