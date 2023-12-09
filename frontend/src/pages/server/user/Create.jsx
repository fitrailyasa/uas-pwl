import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';

function CreateUser() {
    return (
        <>
            <Layout title="Tambah User" backlink="/admin/user">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default CreateUser;
