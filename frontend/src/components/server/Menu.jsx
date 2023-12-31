import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHome, faUser, faBox, faTag, faHistory, faSignOut } from '@fortawesome/free-solid-svg-icons';

function MenuItem({ path, icon, label }) {
    const currentPath = window.location.pathname;
    const isActive = currentPath.startsWith(path);

    return (
        <li className={`nav-item ${isActive ? 'active' : ''}`}>
            <a href={path} className={`nav-link text-white ${isActive ? 'active' : ''}`}>
                <FontAwesomeIcon icon={icon} className="nav-icon" />
                <p>{label}</p>
            </a>
        </li>
    );
}

function Menu({ children, title, backlink }) {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuItem path="/admin/dashboard" icon={faTachometerAlt} label="Dashboard" />
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">
                        <FontAwesomeIcon icon={faHome} className="nav-icon" />
                        <p>Beranda</p>
                    </a>
                </li>
                <MenuItem path="/admin/user" icon={faUser} label="Data User" />
                <MenuItem path="/admin/produk" icon={faBox} label="Data Produk" />
                <MenuItem path="/admin/kategori" icon={faTag} label="Data Kategori" />
                <MenuItem path="/admin/transaksi" icon={faHistory} label="Riwayat Transaksi" />

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
