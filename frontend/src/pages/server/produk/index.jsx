import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Table from '../../../components/server/Table';
import { CONFIG } from '../../../config';

function IndexProduk() {
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
            <Layout title="Kelola Produk" backlink="/admin/dashboard">
                <Table title="Produk" createLink="/admin/produk/create" col={[
                    'No',
                    'Nama',
                    'Aksi'
                ]}>
                    {data.map((i, item) => (
                        <tr key={item}>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>
                                <a href="/admin/produk/show/1" className="btn-sm mx-1 btn-success">Detail</a>
                                <a href="/admin/produk/edit/1" className="btn-sm mx-1 btn-warning">Edit</a>
                                <a href="/admin/produk/destroy/1" className="btn-sm mx-1 btn-danger">Hapus</a>
                            </td>
                        </tr>
                    ))}
                </Table>
            </Layout>
        </>
    );
}

export default IndexProduk;
