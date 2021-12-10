import React from "react";
import Wrapper from "../../Components/wrapper.comp";
import CaseStudy from "./CaseStudy";
import ExperTeam from "./ExperTeam";
import HappiestClient from "./HappiestClient";

import HeroSlider from "./HeroSlider";
import Whatwedo from "./Whatwedo";
import WhyourConsulting from "./WhyourConsulting";

const Home = () => {
  return (
    <Wrapper>
      <HeroSlider />
      <Whatwedo />
      <WhyourConsulting />
      <HappiestClient />
      <CaseStudy />
      <ExperTeam />
    </Wrapper>
  );
};

export default Home;
