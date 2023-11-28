import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Form from '../../../component/server/Form';

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
