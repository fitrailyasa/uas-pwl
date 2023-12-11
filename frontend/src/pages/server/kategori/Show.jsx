import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function ShowKategori() {
    const [kategoriData, setKategoriData] = useState({
        nama: '',
        gambar: null,
    });

    useEffect(() => {
        const fetchKategoriData = async () => {
            try {
                const response = await axios.get('/api/users/1');
                const data = response.data;

                setKategoriData({
                    nama: data.nama || 'test',
                    gambar: data.gambar || 'img.png',
                });
            } catch (error) {
                console.error('Error fetching kategori data', error);
            }
        };

        fetchKategoriData();
    }, []);

    return (
        <>
            <Layout title="Detail Kategori" backlink="/admin/kategori">
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                {kategoriData.nama && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nama"
                                        name="nama"
                                        id="nama"
                                        value={kategoriData.nama}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Gambar</label><br />
                                {kategoriData.gambar && (
                                    <img
                                        src={kategoriData.gambar}
                                        alt="Gambar Kategori"
                                        className="img-fluid"
                                        style={{ maxHeight: '200px' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Form>
            </Layout>
        </>
    );
}

export default ShowKategori;
