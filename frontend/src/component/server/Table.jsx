import React, { useEffect } from 'react';
import $ from 'jquery';

const Table = ({ children, title = [] }) => {
    useEffect(() => {
        $('#example1').DataTable().destroy();

        $("#example1").DataTable({
            "responsive": true,
            "lengthChange": false,
            "autoWidth": false,
            "buttons": ["print"]
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

    }, []);

    return (
        <div className="col-lg-12 form-wrapper">
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {title.map((title, index) => (
                                        <th key={index}>{title}</th>
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