import React from 'react';

const Form = ({ children, onSubmit }) => {
    return (
        <div className="col-lg-12 form-wrapper">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={onSubmit} encType="multipart/form-data">
                        {children}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
