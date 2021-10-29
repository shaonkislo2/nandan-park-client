import React from 'react';
import Packages from '../Packages/Packages';
import Rides from '../Rides/Rides';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
       <Banner></Banner>
      <Rides></Rides>
      <Packages></Packages>
      
        </div>
    );
};

export default Home;