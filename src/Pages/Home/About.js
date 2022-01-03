import React from 'react'
import background from "../../Assets/bradcam.png";
import Wrapper from '../../Components/wrapper.comp';
import { ClientWhoTrustedUs } from './ClientWhoTrustedUs';
import ExperTeam from './ExperTeam';
import GetFreeQuote from './GetFreeQuote';
import GetToKnowUsBetter from './GetToKnowUsBetter';
import HappiestClient from './HappiestClient';
import InformationCallUs from './InformationCallUs';
import Whatwedo from './Whatwedo';
import WhyourConsulting from './WhyourConsulting';

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
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems: "center",
              width: "50%",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h1 style={{ fontSize: "30px" ,marginTop:"20px"}}>We develop Machine Learning, Big Data, and Business Intelligence solutions for enterprises and high-tech companies around the world.</h1>
            <button style={{ border:"2px solid rgb(1, 129, 245)", fontSize:"16px", color:"white",marginTop:"20px",paddingLeft:"55px",paddingRight:"55px",width:"30%",background:'linear-gradient(to bottom, #0181f5 0%, rgba(93, 178, 255, 0.99) 100%)',borderRadius:"20px",height:"35px",}}>Let's become partners!</button>
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
