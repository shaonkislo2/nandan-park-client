import React, { useEffect, useState } from 'react';
import Ride from '../Ride/Ride';
import './Rides.css'

const Rides = () => {
    const [rides, setRides] = useState([]);

    useEffect(() =>{
        fetch('https://arcane-taiga-64807.herokuapp.com/rides')
        .then(res => res.json())
        .then(data => setRides(data))
    },[])
    return (
        <div id="rides">
           <h1 className="text-primary my-5">Our Rides 
           </h1>
          

           <div className="ride-container">
               {
                   rides.map(ride => <Ride
                   key={ride.id}
                   ride={ride}
                   ></Ride>)
               }
           </div>
           

        </div>
    );
};

export default Rides;

/*
[
    {
      "id": 1,
      "name": "ZIP SLIDE",
      "price": "$50",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/ZIP-slide-1-300x300.jpg"
    },
    {
      "id": 2,
      "name": "CABLE CAR",
      "price": "$60",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/Cable-Car-1-300x300.jpg"
    },
    {
      "id": 3,
      "name": "BUMPER CAR",
      "price": "$70",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/Bumper-car-1-300x300.jpg"
    },
    {
      "id": 4,
      "name": "WATER COASTER",
      "price": "$80",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/Water-Coaster-1-300x300.jpg"
    },
    {
      "id": 5,
      "name": "MOON RAKER",
      "price": "$85",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/Moon-Raker-1-300x300.jpg"
    },
    {
      "id": 6,
      "name": "PADDLE BOAT",
      "price": "$90",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/Paddle-Boat-1-300x300.jpg"
    }
  ]
  */