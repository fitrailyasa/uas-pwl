import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faTag, faUser } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className="main-footer d-none d-lg-block fixed-bottom">
                <strong>Copyright 2023 || <a href="#">BELANJAIN AJA</a>. </strong>
                All rights reserved.
            </footer>
            <footer className="px-3 py-2 d-block d-lg-none border-top text-white mt-3 fixed-bottom"
                style={{ backgroundColor: '#653125' }}>
                <div className="container">
                    <div className="d-flex">
                        <ul className="nav col-12 align-items-center justify-content-between">
                            <li><a href="/" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faHome} size="lg" /></a></li>
                            <li><a href="/admin/produk" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faBox} size="lg" /></a></li>
                            <li><a href="/admin/kategori" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faTag} size="lg" /></a></li>
                            <li><a href="/admin/profile/edit" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faUser} size="lg" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
