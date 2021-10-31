import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
           <img style={{width:'100%'}} src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-19458.jpg" alt="" />
           
           <Link to="/"> <button className="btn btn-warning">Go BAck</button></Link>
        </div>
    );
};

export default NotFound;