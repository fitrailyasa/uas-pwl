import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';

function CreateProduk() {
    return (
        <>
            <Layout title="Tambah Produk" backlink="/admin/produk">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default CreateProduk;
