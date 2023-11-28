import React, { useState } from 'react';

const Form = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form submission logic here, for example, using Axios to send data to the server.

        // Reset form data after submission
        setFormData({
            nama: '',
            gambar: null,
        });
    };

    return (
        <div className="col-lg-12 form-wrapper">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Nama</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formData.nama === '' ? 'is-invalid' : ''
                                            }`}
                                        placeholder="nama"
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
                                        className={`form-control ${formData.gambar === null ? 'is-invalid' : ''
                                            }`}
                                        placeholder="gambar"
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
