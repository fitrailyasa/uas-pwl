import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/client';
import Produk from './pages/client/Produk';
import Kategori from './pages/client/Kategori';
import DetailProduk from './pages/client/DetailProduk';
import Profile from './pages/client/Profile';
import Transaksi from './pages/client/Transaksi';
import Dashboard from './pages/server/Dashboard';
import IndexUser from './pages/server/user';
import CreateUser from './pages/server/user/Create';
import EditUser from './pages/server/user/Edit';
import ShowUser from './pages/server/user/Show';
import IndexProduk from './pages/server/produk';
import CreateProduk from './pages/server/produk/Create';
import EditProduk from './pages/server/produk/Edit';
import ShowProduk from './pages/server/produk/Show';
import IndexKategori from './pages/server/kategori';
import CreateKategori from './pages/server/kategori/Create';
import EditKategori from './pages/server/kategori/Edit';
import ShowKategori from './pages/server/kategori/Show';
import IndexTransaksi from './pages/server/transaksi';
import EditTransaksi from './pages/server/transaksi/Edit';
import EditProfile from './pages/server/profile/Edit';

function Rute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produk" element={<Produk />} />
                <Route path="/kategori" element={<Kategori />} />
                <Route path="/detail-produk/1" element={<DetailProduk />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/user" element={<IndexUser />} />
                <Route path="/admin/user/create" element={<CreateUser />} />
                <Route path="/admin/user/edit/1" element={<EditUser />} />
                <Route path="/admin/user/show/1" element={<ShowUser />} />
                <Route path="/admin/produk" element={<IndexProduk />} />
                <Route path="/admin/produk/create" element={<CreateProduk />} />
                <Route path="/admin/produk/edit/1" element={<EditProduk />} />
                <Route path="/admin/produk/show/1" element={<ShowProduk />} />
                <Route path="/admin/kategori" element={<IndexKategori />} />
                <Route path="/admin/kategori/create" element={<CreateKategori />} />
                <Route path="/admin/kategori/edit/1" element={<EditKategori />} />
                <Route path="/admin/kategori/show/1" element={<ShowKategori />} />
                <Route path="/admin/transaksi" element={<IndexTransaksi />} />
                <Route path="/admin/transaksi/edit/1" element={<EditTransaksi />} />
                <Route path="/admin/profile/edit" element={<EditProfile />} />
            </Routes>
        </Router>
    )
}

export default Rute;