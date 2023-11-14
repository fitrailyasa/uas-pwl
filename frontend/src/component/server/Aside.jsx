import React from 'react';
import Menu from './Menu';

function Aside() {
    return (
        <aside className="main-sidebar elevation-4" style={{ backgroundColor: '#EE4D2D' }}>
            <a href="/" className="brand-link px-3">
                <span className="brand-text font-weight-normal text-white">BELANJAIN AJA</span>
            </a>

            <div className="sidebar">
                <a href="/profile" className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="#" className="img-circle elevation-2" alt="User Profile" />
                    </div>
                    <div className="info">
                        <p className="d-block text-white">Admin</p>
                    </div>
                </a>

                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar text-white">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <Menu />
            </div>
        </aside>
    );
}

export default Aside;
