import React from 'react';

function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand fixed-top" style={{ backgroundColor: '#653125' }}>
            <ul className="navbar-nav d-none d-lg-block">
                <li className="nav-item">
                    <button className="nav-link text-white" data-widget="pushmenu">
                        <i className="fas fa-bars"></i>
                    </button>
                </li>
            </ul>
            <ul className="navbar-nav d-block d-lg-none">
                <li className="nav-item">
                    <button className="nav-link text-white" data-widget="pushmenu">
                        <i className="fas fa-bars"></i>
                    </button>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className="nav-link text-white" data-widget="fullscreen">
                        <i className="fas fa-expand-arrows-alt"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
