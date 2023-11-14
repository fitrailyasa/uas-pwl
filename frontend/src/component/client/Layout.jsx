import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="vh-100" style={{ backgroundColor: '#EE4D2D' }}>
            <div className="">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
