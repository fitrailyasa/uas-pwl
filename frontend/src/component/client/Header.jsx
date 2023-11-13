import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="px-3 py-2 border-bottom text-white mb-3 fixed-top" style={{ backgroundColor: '#653125' }}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <img className="img-fluid" width="60" src="#" alt="Logo" />
                    <div className="d-none d-lg-block">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mx-3 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-3 text-white fw-bold fs-5">Home</a></li>
                            <li><a href="/produk" className="nav-link px-3 text-white fw-bold fs-5">Produk</a></li>
                            <li><a href="/kategori" className="nav-link px-3 text-white fw-bold fs-5">Kategori</a></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href="/transaksi" className="nav-link px-2 text-white fw-bold">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </a>
                        <a href="/profile" className="ml-4 border rounded-circle nav-link py-1 px-2 text-white fw-bold d-none d-lg-block">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
