import React, { useEffect } from 'react';
import $ from 'jquery';

const Table = ({ children, title, col = [], createLink }) => {

    useEffect(() => {
        $(document).ready(function () {
            $('#example1').DataTable();
        });
    }, []);

    return (
        <div className="col-lg-12 form-wrapper">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="card-title">Tabel Data {title}</h5>
                        {createLink && (
                            <a href={createLink} className="btn btn-sm btn-primary float-end">Tambah {title}</a>
                        )}
                    </div>
                    <div className="table-responsive">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {col.map((col, index) => (
                                        <th key={index}>{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;