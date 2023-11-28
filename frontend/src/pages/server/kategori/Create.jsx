import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Form from '../../../component/server/Form';

function CreateKategori() {
    return (
        <>
            <Layout title="Tambah Kategori" backlink="/admin/kategori">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default CreateKategori;
