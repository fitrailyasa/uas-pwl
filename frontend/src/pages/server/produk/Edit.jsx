import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Form from '../../../component/server/Form';

function EditProduk() {
    return (
        <>
            <Layout title="Edit Produk" backlink="/admin/produk">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default EditProduk;
