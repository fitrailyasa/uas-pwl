import React, { useState } from 'react';
import Layout from '../../../components/client/Layout';
import axios from 'axios';

const Order = () => {
    const [order, setOrder] = useState({
        nama_produk: '',
        deskripsi_produk: '',
        stok_produk: '',
        harga_produk: '',
        user_order: '',
        no_telp: '',
        nama_order: '',
        harga_order: '',
        jumlah_order: '',
        alamat_order: '',
        catatan: '',
        pembayaran: 'tunai',
        opsi_pengiriman: 'kunjungi toko',
        no_rekening: '',
        foto_pembayaran: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: files[0], // Assuming you're only allowing a single file selection
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic here to send the order data to the server or perform other actions
        console.log('Form submitted:', order);
        // You can make API calls or dispatch actions here
    };

    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <section className="px-4">
                    <div className="col-lg-12 form-wrapper">
                        <div className="p-3 mb-2 text-white">
                            <div className="d-flex justify-content-center m-4">
                            </div>
                            <div className="mb-2 pb-2 row">
                                <label htmlFor="nama_produk" className="col-sm-3 col-form-label">Nama Produk:</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nama_produk"
                                        id="nama_produk"
                                        value={order.nama_produk}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="mb-2 pb-2 row">
                                <label htmlFor="deskripsi_produk" className="col-sm-3 col-form-label">Deskripsi Jenis Pelayanan:</label>
                                <div className="col-sm-9">
                                    <textarea
                                        className="form-control"
                                        name="deskripsi_produk"
                                        id="deskripsi_produk"
                                        value={order.deskripsi_produk}
                                        onChange={handleInputChange}
                                        readOnly
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mb-2 pb-2 row">
                                <label htmlFor="stok_produk" className="col-sm-3 col-form-label">Estimasi Waktu:</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="stok_produk"
                                        id="stok_produk"
                                        value={order.stok_produk}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="mb-2 pb-2 row">
                                <label htmlFor="harga_produk" className="col-sm-3 col-form-label">Harga:</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="harga_produk"
                                        id="harga_produk"
                                        value={order.harga_produk}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalForm">
                            Buka Form
                        </button>
                    </div>
                    <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog" aria-labelledby="modalFormLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '100%', width: '100%' }}>
                            <div className="modal-content" style={{ backgroundColor: '#EE4D2D', color: 'white' }}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalFormLabel">Order Produk</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-lg-12 form-wrapper">
                                            <div className="p-3 mb-2 text-white">
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="user_order" className="col-sm-3 col-form-label">Nama:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="user_order"
                                                            id="user_order"
                                                            value={order.user_order}
                                                            onChange={handleInputChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="no_telp" className="col-sm-3 col-form-label">Nomor Whatsapp:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="no_telp"
                                                            id="no_telp"
                                                            value={order.no_telp}
                                                            onChange={handleInputChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="nama_order" className="col-sm-3 col-form-label">Jenis Layanan:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="nama_order"
                                                            id="nama_order"
                                                            value={order.nama_order}
                                                            onChange={handleInputChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="harga_order" className="col-sm-3 col-form-label">Harga Layanan:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="harga_order"
                                                            id="harga_order"
                                                            value={order.harga_order}
                                                            onChange={handleInputChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="jumlah_order" className="col-sm-3 col-form-label">Jumlah Order:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="jumlah_order"
                                                            id="jumlah_order"
                                                            value={order.jumlah_order}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="alamat_order" className="col-sm-3 col-form-label">Alamat:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="alamat_order"
                                                            id="alamat_order"
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="catatan" className="col-sm-3 col-form-label">Catatan:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="catatan"
                                                            id="catatan"
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="pembayaran" className="col-sm-3 col-form-label">Metode Pembayaran:</label>
                                                    <div className="col-sm-9">
                                                        <select
                                                            className="form-select"
                                                            name="pembayaran"
                                                            id="pembayaran"
                                                            onChange={handleInputChange}
                                                            required
                                                        >
                                                            <option value="tunai">Tunai</option>
                                                            <option value="QRIS">QRIS</option>
                                                            <option value="BCA">Transfer BCA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="opsi_pengiriman" className="col-sm-3 col-form-label">Opsi Pengiriman:</label>
                                                    <div className="col-sm-9">
                                                        <select
                                                            className="form-select"
                                                            name="opsi_pengiriman"
                                                            id="opsi_pengiriman"
                                                            onChange={handleInputChange}
                                                            required
                                                        >
                                                            <option value="kunjungi toko">Kunjungi Toko</option>
                                                            <option value="antar jemput">Antar Jemput</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="no_rekening" className="col-sm-3 col-form-label">No. Rekening (optional):</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="no_rekening"
                                                            id="no_rekening"
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2 pb-2 row">
                                                    <label htmlFor="foto_pembayaran" className="col-sm-3 col-form-label">Bukti Pembayaran:</label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            name="foto_pembayaran"
                                                            id="foto_pembayaran"
                                                            onChange={handleFileChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pb-5 d-flex justify-content-center align-items-center w-100">
                                            <button type="submit" className="btn w-25 mt-2" style={{ backgroundColor: '#D6C37E' }}>
                                                Order
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </Layout >
    );
};

export default Order;

