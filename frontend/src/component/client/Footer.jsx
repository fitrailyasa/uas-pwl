import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faTag, faUser } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="px-3 py-2 d-block d-lg-none border-top text-white mt-3 fixed-bottom"
            style={{ backgroundColor: '#653125' }}>
            <div className="container">
                <div className="d-flex">
                    <ul className="nav col-12 align-items-center justify-content-between">
                        <li><a href="/" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faHome} size="lg" /></a></li>
                        <li><a href="/" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faBox} size="lg" /></a></li>
                        <li><a href="/" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faTag} size="lg" /></a></li>
                        <li><a href="/" className="nav-link px-2 text-white fw-bold"><FontAwesomeIcon icon={faUser} size="lg" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
