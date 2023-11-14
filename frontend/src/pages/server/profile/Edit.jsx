import React from 'react';
import TitleHeading from '../../../component/TitleHeading';
import Layout from '../../../component/server/Layout';

function EditProfile() {
    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Edit Profile" />
            </div >
        </Layout>
    );
}

export default EditProfile;
