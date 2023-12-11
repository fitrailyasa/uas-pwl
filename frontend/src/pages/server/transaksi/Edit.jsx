import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

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
