import React, { useState } from 'react';

const Table = ({ children, title, col = [], createLink }) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredItems = React.Children.toArray(children).filter((item) =>
        Object.values(item.props).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div className="col-lg-12 form-wrapper">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="card-title">Tabel Data {title}</h5>
                        {createLink && (
                            <a href={createLink} className="btn btn-sm btn-primary">Tambah {title}</a>
                        )}
                    </div>
                    <div className="d-flex mb-3 justify-content-between">
                        <div className="d-flex justify-content-start">
                            <label className="form-label mb-0 align-self-center me-2">Tampilkan: </label>
                            <select className="form-select form-select-sm" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control-sm justify-content-end col-2"
                            placeholder="Cari..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {col.map((col, index) => (
                                        <th key={index}>{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems}
                            </tbody>
                        </table>
                    </div>
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={handlePrevClick}
                                >
                                    Sebelumnya
                                </button>
                            </li>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePaginationClick(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={handleNextClick}
                                >
                                    Selanjutnya
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Table;
