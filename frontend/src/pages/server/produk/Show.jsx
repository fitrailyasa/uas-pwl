import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function ShowProduk() {
    return (
        <>
            <Layout title="Detail Produk" backlink="/admin/produk">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default ShowProduk;
