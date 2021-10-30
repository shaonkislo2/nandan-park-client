import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      // src="https://vromonguide.com/wp-content/uploads/nandan-park-savar-dhaka-770x420.jpg
      // "
      src="https://themeparkarchitect.com/wp-content/uploads/2019/05/carnival-fair-fairground-40547-1024x683.jpg
      "
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      // src="http://2.bp.blogspot.com/-OKVT6fz5Yrk/Tq0nuYf3UNI/AAAAAAAABBk/s1HlXKP_jhg/w1200-h630-p-k-no-nu/Nandan_Park_savar_Dhaka_Bangladesh.jpg"
      src="https://files.tripstodiscover.com/files/2019/08/disney-california-adventure-park-by-Hubert-Yu-via-Flickr.com_.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      // src="http://www.assignmentpoint.com/wp-content/uploads/2013/06/report-on-Nandan-Park.jpg"
      src="https://c4.wallpaperflare.com/wallpaper/885/38/545/rocks-on-seashore-wallpaper-preview.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;
