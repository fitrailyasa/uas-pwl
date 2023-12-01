import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHome, faUser, faBox, faTag, faHistory, faSignOut } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <a href="/admin/dashboard" className="nav-link text-white">
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
                    <a href="/admin/user" className="nav-link text-white">
                        <FontAwesomeIcon icon={faUser} className="nav-icon" />
                        <p>Data User</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/admin/produk" className="nav-link text-white">
                        <FontAwesomeIcon icon={faBox} className="nav-icon" />
                        <p>Data Produk</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/admin/kategori" className="nav-link text-white">
                        <FontAwesomeIcon icon={faTag} className="nav-icon" />
                        <p>Data Kategori</p>
                    </a>
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
                    <div className="nav-link text-white">
                        <FontAwesomeIcon icon={faSignOut} className="nav-icon" />
                        <p>Logout</p>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
