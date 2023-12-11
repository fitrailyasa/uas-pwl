import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function CreateProduk() {
    const [formData, setFormData] = useState({
        nama: '',
        gambar: null,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'gambar' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormSubmitted(true);

        if (formData.nama === '' || formData.gambar === null) {
            // If the form data is not valid, don't proceed with the submission
            return;
        }

        try {
            const response = await axios.post(`${CONFIG.API_URL}/users`, formData);

            console.log('Produk created successfully', response.data);
        } catch (error) {
            console.error('Error creating produk', error);
        }
    };

    return (
        <>
            <Layout title="Tambah Produk" backlink="/admin/produk">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    className={`form-control ${formSubmitted && formData.nama === '' ? 'is-invalid' : ''}`}
                                    placeholder="Nama"
                                    name="nama"
                                    id="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                />
                                {formSubmitted && formData.nama === '' && (
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
                                    className={`form-control ${formSubmitted && formData.gambar === null ? 'is-invalid' : ''}`}
                                    placeholder="Gambar"
                                    name="gambar"
                                    id="gambar"
                                    onChange={handleChange}
                                    required
                                />
                                {formSubmitted && formData.gambar === null && (
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

export default CreateProduk;
