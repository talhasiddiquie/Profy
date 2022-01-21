import React from "react";
import background from "../../Assets/bradcam.png";
import InformationCallUs from "./InformationCallUs";
import Wrapper from "../../Components/wrapper.comp";
import Container from '@material-ui/core/Container';
import "./service.css"
import ML from "../../Assets/ml.png"
import BL from "../../Assets/BL.png"
const Services = () => {
  return (
    <Wrapper>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          zIndex: "0",
          height: "32em",
          width: "100%",
          //   marginTop: "105px",
        }}
      >
        <div id="serviceMainDiv"
            style={{
              
            }}
          >
            <h1 id="serviceSetHeading" >Discover our service based on Business Intelligence & Machine Learning</h1>
            
          </div>
      </div>
            <Container id="serviceContainerDiv" >
           <div id="serveiceUnderDiv">
           <img id="serviceMLImg" src={ML} />
           </div>
           
           <div id="serviceHeading">
           <h1 id="serviceHeadingH1">MACHINE LEARNING CONSULTING</h1>
            <p id="serviceHeadingPara">Our machine learning consulting will help you enter the data-driven world and modernize your existing business analysis systems. We will help you extract insight from the collected data and turn it into profits and insights.</p>
            
           </div>
            

           </Container>

           <Container id="serviceContainerDiv"  >
           <div id="serveiceUnderDiv">
           <img id="serviceMLImg" src={BL} />
           </div>
           
           <div id="serviceHeading">
           <h1 id="serviceHeadingH1">BUSINESS INTELLIGENCE SERVICES</h1>
            <p id="serviceHeadingPara">Our Business Intelligence Consulting Services will help you extract knowledge from your data, integrate it into (ETL) Enterprise Data Warehouse (EDW), and turn it into daily insights with interactive dashboards using such tools as Power BI.</p>
            
           </div>
            

           </Container>
            
           
            
            
  

      <InformationCallUs />
    </Wrapper>
  );
};

export default Services;
