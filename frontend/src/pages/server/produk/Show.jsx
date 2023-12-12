import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function ShowProduk() {
    const [produkData, setProdukData] = useState({
        nama: '',
        gambar: null,
        deskripsi: '',
        stok: '',
        harga: '',
        kategori: '',
    });

    useEffect(() => {
        const fetchProdukData = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_URL}/users/1`);
                const data = response.data;

                setProdukData({
                    nama: data.nama || 'test',
                    gambar: data.gambar || 'https://via.placeholder.com/150',
                    deskripsi: data.deskripsi || 'test',
                    stok: data.stok || 2,
                    harga: data.harga || 2000,
                    kategori: data.kategori || 'Makanan',
                });
            } catch (error) {
                console.error('Error fetching produk data', error);
            }
        };

        fetchProdukData();
    }, []);

    return (
        <>
            <Layout title="Detail Produk" backlink="/admin/produk">
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                {produkData.nama && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nama"
                                        name="nama"
                                        id="nama"
                                        value={produkData.nama}
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
                                {produkData.gambar && (
                                    <img
                                        src={produkData.gambar}
                                        alt="Gambar produk"
                                        className="img-fluid"
                                        style={{ maxHeight: '200px' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Deskripsi</label>
                                {produkData.deskripsi && (
                                    <textarea
                                        className="form-control"
                                        placeholder="Deskripsi..."
                                        name="deskripsi"
                                        id="deskripsi"
                                        value={produkData.deskripsi}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Stok</label>
                                {produkData.stok && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="10"
                                        name="stok"
                                        id="stok"
                                        value={produkData.stok}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Harga</label>
                                {produkData.harga && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="100000"
                                        name="harga"
                                        id="harga"
                                        value={produkData.harga}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Kategori</label>
                                {produkData.kategori && (
                                    <select className="form-select" name="kategori" id="kategori" readOnly>
                                        <option value={produkData.kategori}>{produkData.kategori}</option>
                                    </select>
                                )}
                            </div>
                        </div>
                    </div>
                </Form>
            </Layout>
        </>
    );
}

export default ShowProduk;
