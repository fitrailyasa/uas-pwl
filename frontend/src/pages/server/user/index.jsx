import React from 'react';
import TitleHeading from '../../../component/TitleHeading';
import Layout from '../../../component/server/Layout';

function IndexUser() {
    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Kelola User" />
            </div >
        </Layout>
    );
}

export default IndexUser;
