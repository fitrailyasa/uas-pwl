import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';

function ShowUser() {
    return (
        <>
            <Layout title="Detail User" backlink="/admin/user">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default ShowUser;
