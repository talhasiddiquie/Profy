import React from "react";
import background2 from "../../Assets/info_banner.png";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";




const InformationCallUs = () => {
  
  return (
   
      

      <div
        style={{
          backgroundImage: `url(${background2})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          zIndex: "0",
          height: "22em",
          width: "100%",
          marginTop: "105px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          padding: "146px 0px",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontWeight: "300",
             marginTop: "80px",
            // marginBottom: "20px",
            textDecoration: "bold",
          }}
          variant="h3"
          color="textSecondary"
          component="h3"
        >
          For Any Information Call Us
        </Typography>

        <Typography
          style={{
            color: "white",
            fontWeight: "300",
            marginTop: "8px",
            // marginBottom: "20px",
            textDecoration: "bold",
          }}
          variant="h6"
          color="textSecondary"
          component="h6"
        >
          Innovation Solution to Move your Business foward
        </Typography>

        <Button
          style={{
            marginTop: "30px",
            
            backgroundColor: "#2594F8",
            borderRadius: "20px",
            color: "white",
            textDecoration: "bold",
            marginBottom: "90px",
          }}
          variant="contained"
        >
          (021)34988000
        </Button>
      </div>

      
    
  );
};

export default InformationCallUs;
