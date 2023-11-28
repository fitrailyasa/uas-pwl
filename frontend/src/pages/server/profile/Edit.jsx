import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Form from '../../../component/server/Form';

function EditProfile() {
    return (
        <>
            <Layout title="Edit Profile" backlink="/admin/dashboard">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default EditProfile;
