import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/server/Layout';
import Form from '../../../components/server/Form';

function EditKategori() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        body: '',
    });

    useEffect(() => {
        const fetchKategori = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching kategori data:', error);
            }
        };

        fetchKategori();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, formData);
            // Optionally, redirect the user to the category list or show a success message
        } catch (error) {
            console.error('Error updating kategori:', error);
            // Handle error, show an error message, etc.
        }
    };

    return (
        <>
            <Layout title="Edit Kategori" backlink="/admin/kategori">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className={`form-control ${formData.title === '' ? 'is-invalid' : ''}`}
                                    placeholder="Title"
                                    name="title"
                                    id="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                                {formData.title === '' && (
                                    <div className="alert alert-danger">Title is required</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Body</label>
                                <textarea
                                    className={`form-control ${formData.body === '' ? 'is-invalid' : ''}`}
                                    placeholder="Body"
                                    name="body"
                                    id="body"
                                    value={formData.body}
                                    onChange={handleChange}
                                    required
                                />
                                {formData.body === '' && (
                                    <div className="alert alert-danger">Body is required</div>
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
