import React from 'react';
import Navbar from './Navbar';
import Aside from './Aside';
import Footer from './Footer';

const Layout = ({ children, title, backlink }) => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <Navbar />
                <Aside />
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="ml-2">
                                        <a className="fas fa-sm fa-arrow-left text-black" href={backlink}></a> {title}
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">Admin</li>
                                        <li className="breadcrumb-item active">Judul</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid mb-5">
                            {children}
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
