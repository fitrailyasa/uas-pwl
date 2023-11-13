import React from 'react';

function Header() {
    return (
        <header>
            <nav className="px-3 navbar navbar-expand-lg navbar-primary bg-primary">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Beranda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/tentang">Tentang</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/kontak">Kontak</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
