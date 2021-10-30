import React from 'react';
import './Package.css'

const Package = ({pack}) => {
    const {img, price, details}= pack;
    return (
        <div className="package p-3">
            <img src={img} alt="" />
            <h3>{price} </h3>
            <h5>{details} </h5>
            
            <button className="book-style">Book  </button>
            
            
        </div>
    );
};

export default Package;