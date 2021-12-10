import React from "react";
import background from "../../Assets/bradcam.png";
import Whatwedo from "./Whatwedo";
import GetFreeQuote from "./GetFreeQuote";
import InformationCallUs from "./InformationCallUs";
import Wrapper from "../../Components/wrapper.comp";

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
          <h1 style={{ fontSize: "60px" }}>Service</h1>
        </div>
      </div>
      <Whatwedo />

      <InformationCallUs />
    </Wrapper>
  );
};

export default Services;
