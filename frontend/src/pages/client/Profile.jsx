import React from 'react';
// import logo from '../../assets/logo.png';
import Form from '../../components/server/Form';
import Layout from '../../components/server/Layout';

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
