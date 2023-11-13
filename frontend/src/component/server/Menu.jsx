import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHome, faUser, faBox, faTag, faHistory, faSignOut, faAngleLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">
                        <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                        <p>Dashboard</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">
                        <FontAwesomeIcon icon={faHome} className="nav-icon" />
                        <p>Beranda</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon icon={faUser} className="nav-icon" />
                        <p>
                            Data User
                            <FontAwesomeIcon icon={faAngleLeft} className="right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/admin/user" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                                <p>Kelola Data User</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/user/create" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                                <p>Tambah Data User</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon icon={faBox} className="nav-icon" />
                        <p>
                            Data Produk
                            <FontAwesomeIcon icon={faAngleLeft} className="right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/admin/produk" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                                <p>Kelola Data Produk</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/produk/create" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                                <p>Tambah Data Produk</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon icon={faTag} className="nav-icon" />
                        <p>
                            Data Kategori
                            <FontAwesomeIcon icon={faAngleLeft} className="right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/admin/kategori" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                                <p>Kelola Data Kategori</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/kategori/create" className="nav-link text-white">
                                <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                                <p>Tambah Data Kategori</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="/admin/transaksi" className="nav-link text-white">
                        <FontAwesomeIcon icon={faHistory} className="nav-icon" />
                        <p>Riwayat Transaksi</p>
                    </a>
                </li>
                <li className="nav-item">
                    <form id="logout-form" action="#" method="POST" hidden>
                        <input type="hidden" name="_token" value="your_csrf_token_here" />
                    </form>
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon icon={faSignOut} className="nav-icon" />
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
