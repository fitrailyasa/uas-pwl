import React from 'react';
import TitleHeading from '../../../component/TitleHeading';
import Layout from '../../../component/server/Layout';

function CreateProduk() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Tambahkan logika pengiriman data formulir di sini
    };

    const kategoris = [
        { id: 1, nama_kategori: 'Kategori 1' },
        { id: 2, nama_kategori: 'Kategori 2' },
        // ... tambahkan data kategori lainnya sesuai kebutuhan
    ];

    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Tambah Produk" />
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} method="POST" action="#" encType='multipart/form-data'>
                            <div className="mb-3 row">
                                <label className="col-sm-3 col-form-label" htmlFor="nama_produk">Nama produk</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" placeholder="Masukkan nama produk" name="nama_produk" id="nama_produk" required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 col-form-label" htmlFor="gambar_produk">Gambar produk</label>
                                <div className="col-sm-9">
                                    <input type="file" className="form-control" name="gambar_produk" id="gambar_produk" required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 col-form-label" htmlFor="deskripsi_produk">Deskripsi produk</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" placeholder="Masukkan deskripsi produk" name="deskripsi_produk" id="deskripsi_produk" required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 col-form-label" htmlFor="harga_produk">Harga produk</label>
                                <div className="col-sm-9">
                                    <input type="number" className="form-control" placeholder="Masukkan harga produk" name="harga_produk" id="harga_produk" required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 col-form-label" htmlFor="stok_produk">Stok produk</label>
                                <div className="col-sm-9">
                                    <input type="number" className="form-control" placeholder="Masukkan stok produk" name="stok_produk" id="stok_produk" required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 col-form-label" htmlFor="kategori_id">Kategori produk</label>
                                <div className="col-sm-9">
                                    <select className="form-control" name="kategori_id" id="kategori_id">
                                        {kategoris.map((kategori) => (
                                            <option key={kategori.id} value={kategori.id}>{kategori.nama_kategori}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CreateProduk;
