import React from 'react';

function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand" style={{ backgroundColor: '#653125' }}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link text-white" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-white" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
