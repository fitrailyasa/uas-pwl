import React from 'react';
import Layout from '../../component/client/Layout';
import TitleHeading from '../../component/client/TitleHeading';

function Transaksi() {
    return (
        <>
            <Layout>
                <div className="col-lg-12 mt-5 pt-5 form-wrapper">
                    <TitleHeading text="Transaksi" />
                </div >
            </Layout>
        </>
    );
}

export default Transaksi;
