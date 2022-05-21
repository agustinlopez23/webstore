import React from "react";
import "../assets/css/CarouselHome.css";
import { Carousel } from "react-bootstrap";
import banner from "../assets/static/banner.jpg";
import banner2 from "../assets/static/banner3.jpg";
export default function CarouselHome() {
  return (
    <div>
      <Carousel style={{ heigth: "70vh" }}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img-carousel"
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img-carousel"
            src="https://as2.ftcdn.net/v2/jpg/02/77/14/39/1000_F_277143939_lKxAlalIcO7gkp0CrxvE8R7Vv5I7xLxY.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={banner2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
