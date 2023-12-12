import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function CreateUser() {
    const [formData, setFormData] = useState({
        nama: '',
        gambar: null,
        email: '',
        password: '',
        role: '',
        no_telp: '',
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

            console.log('User created successfully', response.data);
        } catch (error) {
            console.error('Error creating user', error);
        }
    };

    return (
        <>
            <Layout title="Tambah User" backlink="/admin/user">
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
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className={`form-control ${formSubmitted && formData.email === '' ? 'is-invalid' : ''}`}
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {formSubmitted && formData.email === '' && (
                                    <div className="alert alert-danger">Email is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${formSubmitted && formData.password === '' ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {formSubmitted && formData.password === '' && (
                                    <div className="alert alert-danger">Password is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select
                                    className={`form-select ${formSubmitted && formData.role === '' ? 'is-invalid' : ''}`}
                                    name="role"
                                    id="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Pilih</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                                {formSubmitted && formData.role === '' && (
                                    <div className="alert alert-danger">Role is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">No Telp</label>
                                <input
                                    type="text"
                                    className={`form-control ${formSubmitted && formData.no_telp === '' ? 'is-invalid' : ''}`}
                                    placeholder="0123456789"
                                    name="no_telp"
                                    id="no_telp"
                                    value={formData.no_telp}
                                    onChange={handleChange}
                                    required
                                />
                                {formSubmitted && formData.no_telp === '' && (
                                    <div className="alert alert-danger">no_telp is required</div>
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

export default CreateUser;
