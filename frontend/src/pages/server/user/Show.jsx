import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function ShowUser() {
    const [userData, setUserData] = useState({
        nama: '',
        gambar: null,
        email: '',
        password: '',
        role: '',
        no_telp: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_URL}/users/1`);
                const data = response.data;

                setUserData({
                    nama: data.nama || 'test',
                    gambar: data.gambar || 'https://via.placeholder.com/150',
                    email: data.email || 'test',
                    password: data.password || 'test',
                    role: data.role || 'test',
                    no_telp: data.no_telp || 'test',
                });
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <Layout title="Detail User" backlink="/admin/user">
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                {userData.nama && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nama"
                                        name="nama"
                                        id="nama"
                                        value={userData.nama}
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
                                {userData.gambar && (
                                    <img
                                        src={userData.gambar}
                                        alt="Gambar user"
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
                                <label className="form-label">Email</label>
                                {userData.email && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                        value={userData.email}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                {userData.password && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={userData.password}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                {userData.role && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Role"
                                        name="role"
                                        id="role"
                                        value={userData.role}
                                        readOnly
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">No. Telp</label>
                                {userData.no_telp && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="0123456789"
                                        name="no_telp"
                                        id="no_telp"
                                        value={userData.no_telp}
                                        readOnly
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

export default ShowUser;
