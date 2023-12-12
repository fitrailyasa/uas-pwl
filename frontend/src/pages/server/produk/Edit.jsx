import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function EditProduk() {
    const [formData, setFormData] = useState({
        nama: '',
        gambar: null,
        deskripsi: '',
        stok: '',
        harga: '',
        kategori: '',
    });

    const [showAlerts, setShowAlerts] = useState(false);

    useEffect(() => {
        const fetchProdukData = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_URL}/users/1`);
                const produkData = response.data;

                setFormData({
                    nama: produkData.name,
                    gambar: 'https://via.placeholder.com/150',
                    deskripsi: produkData.deskripsi,
                    stok: produkData.stok,
                    harga: produkData.harga,
                    kategori: produkData.kategori,
                });
            } catch (error) {
                console.error('Error fetching produk data', error);
            }
        };

        fetchProdukData();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'gambar' ? files[0] : value,
        }));

        setShowAlerts(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.nama === '' || formData.gambar === null) {
            setShowAlerts(true);
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nama', formData.nama);
            formDataToSend.append('gambar', formData.gambar);
            formDataToSend.append('deskripsi', formData.deskripsi);
            formDataToSend.append('stok', formData.stok);
            formDataToSend.append('harga', formData.harga);
            formDataToSend.append('kategori', formData.kategori);

            const response = { data: { id: 1, ...formData } };

            console.log('Produk updated successfully', response.data);
        } catch (error) {
            console.error('Error updating produk', error);
        }
    };

    return (
        <>
            <Layout title="Edit Produk" backlink="/admin/produk">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    className={`form-control ${showAlerts && formData.nama === '' ? 'is-invalid' : ''}`}
                                    placeholder="Nama"
                                    name="nama"
                                    id="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                />
                                {showAlerts && formData.nama === '' && (
                                    <div className="alert alert-danger">Nama is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Gambar</label><br />
                                <img className="img-fluid mb-3" style={{ maxHeight: '200px' }} src={formData.gambar} alt="Gambar produk" />
                                <input
                                    type="file"
                                    className={`form-control ${showAlerts && formData.gambar === null ? 'is-invalid' : ''}`}
                                    placeholder="gambar"
                                    name="gambar"
                                    id="gambar"
                                    onChange={handleChange}
                                    required
                                />
                                {showAlerts && formData.gambar === null && (
                                    <div className="alert alert-danger">Gambar is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Deskripsi</label>
                                <textarea
                                    className={`form-control ${showAlerts && formData.deskripsi === '' ? 'is-invalid' : ''}`}
                                    placeholder="Deskripsi..."
                                    name="deskripsi"
                                    id="deskripsi"
                                    value={formData.deskripsi}
                                    onChange={handleChange}
                                    required
                                />
                                {showAlerts && formData.deskripsi === '' && (
                                    <div className="alert alert-danger">Deskripsi is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Stok</label>
                                <input
                                    type="number"
                                    className={`form-control ${showAlerts && formData.stok === '' ? 'is-invalid' : ''}`}
                                    placeholder="10"
                                    name="stok"
                                    id="stok"
                                    value={formData.stok}
                                    onChange={handleChange}
                                    required
                                />
                                {showAlerts && formData.stok === '' && (
                                    <div className="alert alert-danger">Stok is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Harga</label>
                                <input
                                    type="number"
                                    className={`form-control ${showAlerts && formData.harga === '' ? 'is-invalid' : ''}`}
                                    placeholder="100000"
                                    name="harga"
                                    id="harga"
                                    value={formData.harga}
                                    onChange={handleChange}
                                    required
                                />
                                {showAlerts && formData.harga === '' && (
                                    <div className="alert alert-danger">Harga is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Kategori</label>
                                <select
                                    className={`form-select ${showAlerts && formData.kategori === '' ? 'is-invalid' : ''}`}
                                    name="kategori"
                                    id="kategori"
                                    value={formData.kategori}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Pilih kategori</option>
                                    <option value="makanan">Makanan</option>
                                    <option value="minuman">Minuman</option>
                                </select>
                                {showAlerts && formData.kategori === '' && (
                                    <div className="alert alert-danger">Kategori is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button type="submit" className="btn btn-primary">
                                Simpan
                            </button>
                        </div>
                    </div>
                </Form>
            </Layout>
        </>
    );
}

export default EditProduk;
