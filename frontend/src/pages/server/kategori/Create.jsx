import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function CreateKategori() {
    const [formData, setFormData] = useState({
        nama: '',
        gambar: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'gambar' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${CONFIG.API_URL}/api/kategori/create`, formData);

            console.log('Kategori created successfully', response.data);
        } catch (error) {
            console.error('Error creating kategori', error);
        }
    };

    return (
        <>
            <Layout title="Tambah Kategori" backlink="/admin/kategori">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    className={`form-control ${formData.nama === '' ? 'is-invalid' : ''}`}
                                    placeholder="Nama"
                                    name="nama"
                                    id="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                />
                                {formData.nama === '' && (
                                    <div className="alert alert-danger">Nama is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Gambar</label>
                                <input
                                    type="file"
                                    className={`form-control ${formData.gambar === null ? 'is-invalid' : ''}`}
                                    placeholder="Gambar"
                                    name="gambar"
                                    id="gambar"
                                    onChange={handleChange}
                                    required
                                />
                                {formData.gambar === null && (
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

export default CreateKategori;
