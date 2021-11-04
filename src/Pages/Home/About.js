import React from 'react'
import background from "../../Assets/bradcam.png";
import ExperTeam from './ExperTeam';
import GetFreeQuote from './GetFreeQuote';
import HappiestClient from './HappiestClient';
import InformationCallUs from './InformationCallUs';
import Whatwedo from './Whatwedo';
import WhyourConsulting from './WhyourConsulting';

const About = () => {
    return (
        <div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            zIndex: "0",
            height: "32em",
            width: "100%",
            marginBottom:"60px"
          //   marginTop: "105px",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              width: "50%",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h1 style={{ fontSize: "60px" }}>About</h1>
          </div>
        </div>
            
            <WhyourConsulting/>
            <HappiestClient/>
            <Whatwedo/>
            <ExperTeam/>
            <GetFreeQuote/>
            <InformationCallUs/>
        
      </div>
    )
}

export default About
