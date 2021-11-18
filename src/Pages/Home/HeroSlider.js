
import React from "react";
import Banner1 from "../../Assets/banner.jpg"
import Banner2 from "../../Assets/banner_2.jpg"
import { Carousel } from 'react-bootstrap';
import "./home.css"

const HeroSlider = () => {
    return ( <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
              <div className="col-xl-12">
              <h3>Big Opportunity <br/> for your Business </h3>
                    <button id="btn-slider"
            className='btn btn-danger'
           
            
            >
           Our Services
          </button>
                  </div>
         
            
          </Carousel.Caption>
        </Carousel.Item>
        
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <div className="col-xl-12">
              <h3>Big Opportunity <br/> for your Business </h3>
                    <button id="btn-slider"
            className='btn btn-danger'
           
            
            >
           Our Services
          </button>
                  </div>
         
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>)
   
}
export default HeroSlider;
