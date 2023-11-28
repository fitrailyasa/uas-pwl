import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Form from '../../../component/server/Form';

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
