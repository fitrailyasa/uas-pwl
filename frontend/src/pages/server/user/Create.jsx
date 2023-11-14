import React from 'react';
import TitleHeading from '../../../component/TitleHeading';
import Layout from '../../../component/server/Layout';

function CreateUser() {
    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Tambah User" />
            </div >
        </Layout>
    );
}

export default CreateUser;
