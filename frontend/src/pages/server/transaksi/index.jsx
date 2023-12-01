import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../component/server/Layout';
import Table from '../../../component/server/Table';

function IndexTransaksi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Layout title="Kelola Transaksi" backlink="/admin/dashboard">
                <Table title="Transaksi" createLink="" col={[
                    'No',
                    'Nama',
                    'Aksi'
                ]}>
                    {data.map((i, item) => (
                        <tr key={i}>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>
                                <a href="/admin/transaksi/edit/1" className="btn-sm mx-1 btn-warning">Edit</a>
                            </td>
                        </tr>
                    ))}
                </Table>
            </Layout>
        </>
    );
}

export default IndexTransaksi;
