import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';
import { CONFIG } from '../../../config';

function ShowUser() {
    const [userData, setUserData] = useState({
        nama: '',
        gambar: null,
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_URL}/users/1`);
                const data = response.data;

                setUserData({
                    nama: data.nama || 'test',
                    gambar: data.gambar || 'https://via.placeholder.com/150',
                });
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <Layout title="Detail user" backlink="/admin/user">
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
                </Form>
            </Layout>
        </>
    );
}

export default ShowUser;
