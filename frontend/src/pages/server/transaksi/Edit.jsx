import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Form from '../../../component/server/Form';

function EditTransaksi() {
    return (
        <>
            <Layout title="Edit Transaksi" backlink="/admin/transaksi">
                <Form>
                </Form>
            </Layout>
        </>
    );
}

export default EditTransaksi;
