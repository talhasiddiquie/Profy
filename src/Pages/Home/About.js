import React from 'react'
import background from "../../Assets/bradcam.png";
import Wrapper from '../../Components/wrapper.comp';
import { ClientWhoTrustedUs } from './ClientWhoTrustedUs';
import ExperTeam from './ExperTeam';
import GetFreeQuote from './ContactForm';
import GetToKnowUsBetter from './GetToKnowUsBetter';
import HappiestClient from './HappiestClient';
import InformationCallUs from './InformationCallUs';
import Whatwedo from './Whatwedo';
import WhyourConsulting from './WhyourConsulting';
import "./about.css"
const About = () => {
    return (
        <Wrapper>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            zIndex: "0",
            height: "33em",
            width: "100%",
            marginBottom:"60px",
            
          }}
        >
          <div id="aboutMainDiv"
            style={{
              
            }}
          >
            <h1 id="aboutSetHeading" >We develop Machine Learning, Big Data, and Business Intelligence solutions for enterprises and high-tech companies around the world.</h1>
            <button id="aboutBtn">Let's become partners!</button>
          </div>
        </div>
            
            <WhyourConsulting/>
            <ClientWhoTrustedUs/>
            <GetToKnowUsBetter/>
            <HappiestClient/>
            <Whatwedo/>
            <ExperTeam/>
            
            <InformationCallUs/>
        
      </Wrapper>
    )
}

export default About
