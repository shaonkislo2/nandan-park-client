import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5 footer">
            <div className="row">
              <div className="col-md-4  ">   
                  <h2 className="mt-5">About Us</h2>
                   <div className="link-style">
                   <span><Link to="/">Home</Link></span> <br />
                   <span><Link to="/rides">Rides</Link></span> <br />
                   <span><Link to="/packages">Packages</Link></span> <br />
                   <span><Link to="/membership">MemberShip</Link></span>
                   </div>                                 
              </div>
              
              <div className="col-md-4">             
                  <h3 className="mt-5">Follow US</h3>                  
                  <h4><i class="fab fa-facebook-square"></i></h4>
                  <h4><i class="fab fa-twitter"></i></h4>
                  <h4><i class="fab fa-instagram-square"></i></h4>              
              </div>

              <div className="col-md-4">
                <div className="fourth-part">
                  <h3 className="mt-5">Contact Us</h3>
                  <small ><i class="fas fa-map-marker-alt"></i> Baroipara,Chandra,Savar,Dhaka,Bangladesh. </small>
                  <br />
                  <small> <i class="fas fa-phone-square-alt"></i> Phone: +8802-54552-5645</small>
                  <br />
                  <small><i class="fas fa-envelope"></i> Mail: nandanpark789@gmail.com</small>
                </div>
              </div>
            </div>
            <hr />
            <div className="botton text-center">
              <small>© 2021  NANDAN PARK LTD All Rights Reserved.</small>
            </div>
          
        </div>
      );
};

export default Footer;