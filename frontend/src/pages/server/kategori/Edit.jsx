import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function EditKategori() {
    const [formData, setFormData] = useState({
        nama: '',
        gambar: null,
    });

    const [showAlerts, setShowAlerts] = useState(false);

    useEffect(() => {
        const fetchKategoriData = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_URL}/users/1`);
                const kategoriData = response.data;

                setFormData({
                    nama: kategoriData.name,
                    gambar: 'https://via.placeholder.com/150',
                });
            } catch (error) {
                console.error('Error fetching kategori data', error);
            }
        };

        fetchKategoriData();
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

            const response = { data: { id: 1, ...formData } };

            console.log('Kategori updated successfully', response.data);
        } catch (error) {
            console.error('Error updating kategori', error);
        }
    };

    return (
        <>
            <Layout title="Edit Kategori" backlink="/admin/kategori">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    className={`form-control ${showAlerts && formData.nama === '' ? 'is-invalid' : ''}`}
                                    placeholder="nama"
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
                                <img className="img-fluid mb-3" style={{ maxHeight: '200px' }} src={formData.gambar} alt="Gambar Kategori" />
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

export default EditKategori;
