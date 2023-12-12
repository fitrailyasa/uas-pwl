import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/client';
import Produk from './pages/client/order/';
import DetailProduk from './pages/client/order/Create';
import Kategori from './pages/client/kategori';
import DetailKategori from './pages/client/kategori/Show';
import Profile from './pages/client/profile/Edit';
import Transaksi from './pages/client/transaksi';
import DetailTransaksi from './pages/client/transaksi/Edit';
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

const ClientRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/detail-produk/:id" element={<DetailProduk />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/detail-kategori/:id" element={<DetailKategori />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/detail-transaksi/:id" element={<DetailTransaksi />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
);

const ServerRoutes = () => (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<IndexUser />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/show/:id" element={<ShowUser />} />
        <Route path="/produk" element={<IndexProduk />} />
        <Route path="/produk/create" element={<CreateProduk />} />
        <Route path="/produk/edit/:id" element={<EditProduk />} />
        <Route path="/produk/show/:id" element={<ShowProduk />} />
        <Route path="/kategori" element={<IndexKategori />} />
        <Route path="/kategori/create" element={<CreateKategori />} />
        <Route path="/kategori/edit/:id" element={<EditKategori />} />
        <Route path="/kategori/show/:id" element={<ShowKategori />} />
        <Route path="/transaksi" element={<IndexTransaksi />} />
        <Route path="/transaksi/edit/:id" element={<EditTransaksi />} />
        <Route path="/profile/edit" element={<EditProfile />} />
    </Routes>
);

function Rute() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/*" element={<ServerRoutes />} />
                <Route path="/*" element={<ClientRoutes />} />
            </Routes>
        </Router>
    );
}

export default Rute;