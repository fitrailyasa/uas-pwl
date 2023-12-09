import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';

function ShowKategori() {
    return (
        <>
            <Layout title="Detail Kategori" backlink="/admin/kategori">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default ShowKategori;
