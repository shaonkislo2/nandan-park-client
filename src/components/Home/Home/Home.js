import React from 'react';
import Gallery from '../Gallery/Gallery';
import Packages from '../Packages/Packages';
import Rides from '../Rides/Rides';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
       <Banner></Banner>
      <Rides></Rides>
      <Packages></Packages>
      <Gallery></Gallery>
      
        </div>
    );
};

export default Home;