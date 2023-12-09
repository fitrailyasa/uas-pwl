import { useState } from 'react';
import Layout from '../../components/client/Layout';

function Transaksi() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toUpperCase());
    };
    return (
        <>
            <Layout>
                <div className="col-lg-12 mt-5 pt-5 form-wrapper">
                    <div className="text-white">
                        <div className="">
                            <section className="row d-flex justify-content-center">
                                <p className="row justify-content-center">Menampilkan semua riwayat transaksi</p>
                                <hr className="row w-75" style={{ backgroundColor: 'rgb(48, 48, 48)', color: '#fff', height: '3px' }} />
                            </section>

                            <section
                                id="listorders"
                                className="w-100 d-flex flex-column justify-content-center align-items-center"
                                style={{ paddingBottom: '15vh' }}
                            >
                                <input
                                    className="my-3 w-75 form-control"
                                    type="text"
                                    id="myInput"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    placeholder="Search..."
                                />
                                <div className="card p-2 rounded-3" style={{ backgroundColor: 'rgb(101, 49, 37)', color: 'white', width: '75%' }}>
                                    <div className="d-flex mb-3">
                                        <div className="d-flex justify-content-center align-content-center">
                                            <i className="fa-regular fa-file-lines p-1" style={{ fontSize: '2rem' }} />
                                        </div>
                                        <div className="d-flex flex-column justify-content-center overflow-hidden">
                                            <p className="text-md fw-bolder">Pesanan #Fitra</p>
                                            <div className="d-flex">
                                                <span className="text-md">10</span>
                                                <span className="text-md px-2">Ukuran L</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="col mt-0 p-0" style={{ backgroundColor: 'white', color: '#3d3c42', height: '3px' }} />
                                    <div className="d-flex px-2 flex-row justify-content-between align-items-center">
                                        <span>Sedang diproses</span>
                                        <button className="btn border border-3 text-white">Detail</button>
                                    </div>
                                </div>
                                <div className="card p-2 rounded-3" style={{ backgroundColor: 'rgb(101, 49, 37)', color: 'white', width: '75%' }}>
                                    <div className="d-flex mb-3">
                                        <div className="d-flex justify-content-center align-content-center">
                                            <i className="fa-regular fa-file-lines p-1" style={{ fontSize: '2rem' }} />
                                        </div>
                                        <div className="d-flex flex-column justify-content-center overflow-hidden">
                                            <p className="text-md fw-bolder">Pesanan #Fitra</p>
                                            <div className="d-flex">
                                                <span className="text-md">10</span>
                                                <span className="text-md px-2">Ukuran L</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="col mt-0 p-0" style={{ backgroundColor: 'white', color: '#3d3c42', height: '3px' }} />
                                    <div className="d-flex px-2 flex-row justify-content-between align-items-center">
                                        <span>Sedang diproses</span>
                                        <button className="btn border border-3 text-white">Detail</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div >
            </Layout>
        </>
    );
}

export default Transaksi;
