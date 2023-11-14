import React from 'react';
import Header from '../../component/client/Header';
import Footer from '../../component/client/Footer';
import TitleHeading from '../../component/TitleHeading';

function Produk() {
    return (
        <>
            <Header />
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Produk" />
            </div >
            <Footer />
        </>
    );
}

export default Produk;
