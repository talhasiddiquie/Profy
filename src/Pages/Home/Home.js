import React from "react";
import CaseStudy from "./CaseStudy";
import ExperTeam from "./ExperTeam";
import HappiestClient from "./HappiestClient";

import HeroSlider from "./HeroSlider";
import Whatwedo from "./Whatwedo";
import WhyourConsulting from "./WhyourConsulting";


const Home  = () => {
    return (
        <div>
          <HeroSlider/>
          <Whatwedo/>
         <WhyourConsulting/>
         <HappiestClient/>
         <CaseStudy/>
         <ExperTeam/>
        </div>
    )
}

export default Home;
