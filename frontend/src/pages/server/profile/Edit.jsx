import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

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
