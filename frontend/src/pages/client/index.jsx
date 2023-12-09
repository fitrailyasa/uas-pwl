import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/client/Layout';
import Card from '../../components/client/CardProduk';
import logo from '../../assets/logo.png';

function Home() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setDatas(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Layout>
                <div className="col-lg-12 mt-5 pt-5 form-wrapper">
                    <section className="px-3 py-2">
                        <div className="row">
                            {datas.map(data => (
                                <Card
                                    key={data.id}
                                    gambar={logo}  // Gambar disesuaikan dengan data yang didapat dari API
                                    nama={data.title}  // Nama diambil dari data title dari API
                                    harga={`ID: ${data.id}`}  // Harga atau informasi lain dari data API
                                    link={`http://localhost:3000/data/${data.id}`}  // Sesuaikan dengan URL yang diinginkan
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}

export default Home;
