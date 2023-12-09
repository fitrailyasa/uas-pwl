import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column" style={{ backgroundColor: '#EE4D2D' }}>
            <div className="">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
