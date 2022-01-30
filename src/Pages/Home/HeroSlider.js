import React from "react";
import Banner1 from "../../Assets/banner.jpg";
import Banner2 from "../../Assets/banner_2.jpg";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

const HeroSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <div className="col-xl-12">
            <h3>
              Innovation Solution to
              <br /> Move your Business foward
            </h3>

            <Link style={{ textDecoration: "none" }} to="/services">
              <button id="btn-slider" className="btn primary">Services</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Third slide" />

        <Carousel.Caption>
          <div className="col-xl-12">
            <h3>
              Confused about making new decisions? <br /> We have a solution!!{" "}
            </h3>
            <Link style={{ textDecoration: "none" }} to="/login">
              <button id="btn-slider" className="btn primary">Login</button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HeroSlider;
