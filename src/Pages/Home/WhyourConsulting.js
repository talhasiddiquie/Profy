import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import img1 from "../../Assets/about.png"

const useStyles = makeStyles((theme) => ({
  
  divSet: {
    display:"flex",width: "100%", justifyContent:"center", paddingLeft:"200px",paddingRight:"200px",
    [theme.breakpoints.down("md")]: {
      paddingLeft:"0px",
      paddingRight:"0px",
      flexDirection:"column"
    },
  },
  headingSet:{
    width:"35%",
      display:"flex",
      flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      width:"100%",
      paddingLeft:"20px",
      paddingRight:"20px",
      marginBottom:"20px" 
    },
  },

  h1Set :{
    fontSize: "46px",fontWeight: "300",color: "#001D38",marginBottom:"25px"
  },

  imgSet : {
    borderRadius:"15px",width:"100%",
    [theme.breakpoints.down("md")]: {
      width:"100%",
      paddingLeft:"10px",
      paddingRight:"10px",
      marginBottom:"20px" 
    },
  }
}));
const WhyourConsulting = () => {
  const classes = useStyles();
  return (
   

      <div className={classes.divSet}>


          <div className={classes.headingSet}>
            <div style={{display:"flex",justifyContent:"flex-start",width:"100%",}}>
            <h1 className={classes.h1Set}>
           Why our Consulting?
           </h1>
            </div>
          
           <p style={{paddingRight:"20px",marginTop:"0px"}}>Esteem spirit temper too say adieus who direct esteem. It esteems <br/> luckily or picture placing drawing.
              Apartments frequently or motionless on reasonable.</p>

          <div style={{display:"flex",justifyContent:"flex-start",width:"100%",marginTop:"10px"}}>
          <Button style={{background:"linear-gradient(to bottom, #0181f5 0%, rgba(93, 178, 255, 0.99) 100%)",color:"white",padding:"13px 40px",borderRadius:"25px"}}>
             About Us
           </Button>
          </div>
          
          </div>

          <div>
          <img className={classes.imgSet} src={img1} alt='' />
          </div>
      </div>

  );
};

export default WhyourConsulting;
