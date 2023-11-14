import React from 'react';

function Card({ nama, harga, link, gambar }) {
    return (
        <div className="col-xl-2 col-md-6 col-6 mb-3">
            <div className="card text-start rounded-4">
                <div className="text-center p-2">
                    <img height="100" className=""
                        src={gambar}
                        alt="produk" />
                </div>
                <div className="p-3 border-top">
                    <h4 className="card-title">{nama}</h4>
                    <p className="card-text fw-bold">Rp. {harga}</p>
                    <a className="btn btn-sm btn-primary" href={link}>Detail</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
