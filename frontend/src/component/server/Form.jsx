import React, { useState } from 'react';

const Form = ({ children }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="col-lg-12 form-wrapper">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {children}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
