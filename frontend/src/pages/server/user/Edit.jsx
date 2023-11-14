import React from 'react';
import TitleHeading from '../../../component/server/TitleHeading';
import Layout from '../../../component/server/Layout';

function EditUser() {
    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Edit User" />
            </div >
        </Layout>
    );
}

export default EditUser;
