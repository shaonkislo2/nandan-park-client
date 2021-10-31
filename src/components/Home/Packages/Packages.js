import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() =>{
        fetch('packages.json')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div id="packages">
            <h2 className="my-5">Our Packages </h2>

            <div className="packages-container">
            {
               packages.map (pack => <Package
               key={pack.id}
               pack={pack}
               ></Package>) 
            }
            </div>
        </div>
    );
};

export default Packages;

/*
[
    {
      "id": 1,
      "Details": "Entry + Two Rides (Moon Raker & Paddle Boat)",
      "price": "$295",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/1-300x300.png"
    },
    {
      "id": 2,
      "Details": "Entry + 10 Rides of Dry Park Package Ticket",
      "price": "$450",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/2-300x300.png"
    },
    {
      "id": 3,
      "Details": "Entry + All Rides (Water World)",
      "price": "$550",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/3-300x300.png"
    },
    {
      "id": 4,
      "Details": "Super Saver Package Ticket",
      "price": "$650",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/5-300x300.png"
    },
    {
      "id": 5,
      "Details": "Whole Park (All Rides Of Park",
      "price": "$745",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/8-300x300.png"
    },
    {
      "id": 6,
      "Details": "Whole Park Package With Lunch",
      "price": "$945",
      "img": "https://nandanpark.com/wp-content/uploads/2019/11/9-300x300.png"
    }
  ]
  */