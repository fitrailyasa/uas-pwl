import React from 'react';
import Header from '../../component/client/Header';
import Footer from '../../component/client/Footer';
import TitleHeading from '../../component/TitleHeading';

function Kategori() {
    return (
        <>
            <Header />
            <div className="col-lg-12 mt-5 pt-5 form-wrapper">
                <TitleHeading text="Kategori" />
            </div >
            <Footer />
        </>
    );
}

export default Kategori;
