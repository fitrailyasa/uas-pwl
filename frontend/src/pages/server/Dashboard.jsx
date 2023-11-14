import React from 'react';
import Layout from '../../component/server/Layout';
import TitleHeading from '../../component/TitleHeading';

function Dashboard() {
    return (
        <Layout>
            <div className="col-lg-12 form-wrapper">
                <TitleHeading text="Dashboard" />
            </div>
        </Layout>
    );
}

export default Dashboard;
