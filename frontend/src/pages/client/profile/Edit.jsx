import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function EditProfile() {
    const [formData, setFormData] = useState({
        nama: '',
        gambar: null,
        email: '',
        password: '',
        role: '',
        no_telp: '',
    });

    const [showAlerts, setShowAlerts] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_URL}/users/1`);
                const profileData = response.data;

                setFormData({
                    nama: profileData.name,
                    gambar: 'https://via.placeholder.com/150',
                    email: profileData.email,
                    password: profileData.password,
                    role: profileData.role,
                    no_telp: profileData.no_telp,
                });
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchProfileData();
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
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('role', formData.role);
            formDataToSend.append('no_telp', formData.no_telp);

            const response = { data: { id: 1, ...formData } };

            console.log('Profile updated successfully', response.data);
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <>
            <Layout title="Edit Profile" backlink="/profile">
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
                                <img className="img-fluid mb-3" style={{ maxHeight: '200px' }} src={formData.gambar} alt="Gambar profile" />
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
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select
                                    className="form-select"
                                    name="role"
                                    id="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Pilih role</option>
                                    <option value="admin">Admin</option>
                                    <option value="profile">profile</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">No Telp</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0123456789"
                                    name="no_telp"
                                    id="no_telp"
                                    value={formData.no_telp}
                                    onChange={handleChange}
                                    required
                                />
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

export default EditProfile;
