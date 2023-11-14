import React from 'react';
import Layout from '../../component/server/Layout';
import TitleHeading from '../../component/TitleHeading';

function Profile() {
    return (
        <>
            <Layout>
                <div className="col-lg-12 form-wrapper">
                    <TitleHeading text="Profile" />
                </div >
            </Layout>
        </>
    );
}

export default Profile;
