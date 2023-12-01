import React from 'react';
// import logo from '../../assets/logo.png';
import Form from '../../component/server/Form';
import Layout from '../../component/server/Layout';

function Profile() {
    return (
        <>
            <Layout title="Update Profile" backlink="/">
                <Form></Form>
            </Layout>
        </>
    );
}

export default Profile;
