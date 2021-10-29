import React from 'react';
import './Ride.css'

const Ride = ({ride}) => {
    const {name, img,price} = ride;
    
    return (
        <div  className="ride  p-3">
         <h1 className="fs-3 my-3">{name} </h1>
         <img className="w-100" src={img} alt="" />
         <h3 className="px-3 mt-3">{price}</h3>
        </div>
    );
};

export default Ride;