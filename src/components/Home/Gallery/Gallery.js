import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className="row mt-5">
			<h1>~What Our Clients Says~</h1>

			<div className="col-lg-4 container mt-5 ">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://watchmojo.com/uploads/thumbs720/theme.jpg"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://www.touristplaces.com.bd/images/pp/5/p112429.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://static.onecms.io/wp-content/uploads/sites/28/2021/01/07/the-phoenix-coney-island-CONEY0121.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="col-lg-4 container mt-5 ml-3">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://media.istockphoto.com/photos/families-at-the-fair-on-a-swing-ride-picture-id138210023?k=20&m=138210023&s=612x612&w=0&h=zi7-lUrw6VA0SNFNjYu-jxqacFiuUWWJuzuFKixbs58="
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://www.jason-rides.com/uploads/allimg/200424/1-2004241250550.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://www.vennersys.co.uk/wp-content/uploads/2020/09/Visitor-Attractions-Theme-Parks.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

            <div className="col-lg-4 container mt-5 ml-3">
				<Carousel>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://static01.nyt.com/images/2007/11/09/nyregion/09coney-600.jpg?quality=75&auto=webp&disable=upscale"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://www.mymotherlode.com/wp-content/uploads/2020/10/Disneyland-Park-in-Anaheim-California.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="w-75"
							src="https://assets.artworkarchive.com/image/upload/t_jpg_large/v1/user_15426/ridenight2print_qiv6oh"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>

		</div>
    );
};

export default Gallery;