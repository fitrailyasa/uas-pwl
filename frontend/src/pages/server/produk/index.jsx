import React from 'react';
import Layout from '../../../component/server/Layout';
import Table from '../../../component/server/Table';

function IndexProduk() {
    const data = [
        {
            id: 1,
            nama: 'Fitra'
        },
        {
            id: 2,
            nama: 'Ilyasa'
        },

    ]
    console.log(data)
    return (
        <Layout title="Tabel Produk" backlink="/admin/dashboard">
            <Table title={[
                'No',
                'Nama',
                'Aksi'
            ]}>
                {data.map((index, item) => (
                    <tr key={index}>
                        <td>{index.id}</td>
                        <td>{index.nama}</td>
                        <td>
                            <a href="#" className="btn-sm mx-1 btn-success">Detail</a>
                            <a href="#" className="btn-sm mx-1 btn-warning">Edit</a>
                            <a href="#" className="btn-sm mx-1 btn-danger">Hapus</a>
                        </td>
                    </tr>

                ))}
            </Table>
        </Layout>
    );
}

export default IndexProduk;
