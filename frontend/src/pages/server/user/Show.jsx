import React from 'react';
import TitleHeading from '../../../component/server/TitleHeading';
import Layout from '../../../component/server/Layout';

function ShowUser() {
    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Detail User" />
            </div >
        </Layout>
    );
}

export default ShowUser;
