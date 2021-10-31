import React from "react";
import { makeStyles,Button } from "@material-ui/core";
import Carousel from 'react-elastic-carousel';
import sliderImg from "../../Assets/slider1.png"
import Card from "@material-ui/core/Card";

import "./casestudy.css"


const useStyles = makeStyles((theme) => ({
  mainDiv:{
      width:"100%",
    display:"flex",justifyContent:"center",marginTop:"30px",flexDirection:"column",alignItems:"center"
  },
    sliderResponsive:{
      width:"65%!important",
      [theme.breakpoints.down("md")]: {
        width:"100%!important",
      },
      
    },
    cardSet:{
        borderRadius:"10px",width:"350px",boxShadow:"0 3px 6px rgb(0 0 0 / 5%)",marginBottom:"60px",overflow:"hidden"
      },
    imgDiv:{
      display:"flex",justifyContent:"center",flexDirection:"column",
    }
     ,
     spanDiv:{
      color:"#919191",fontSize:"15px",fontWeight:"400"
     },
     parentDiv:{
      padding:"25px 29px"
     },
     headingSet:{
      textDecoration:"none",fontWeight:"500",color:"#001D38",fontSize:"18px"
     },
     h1Div:{
            marginBottom:"40px"
     },
     h1Set:{
         fontSize:"46px",
         fontWeight:"300",
         lineHeight:"76px",
         color:"#001D38",
         position:"relative",
         zIndex:"0",
         paddingBottom:"10px"

     },
     
     btnSet:{
        color:"#0181f5",padding:"13px 40px",borderRadius:"25px",borderColor:"#0181f5",
        '&:hover': {
            color:"white",
            background:"linear-gradient(to bottom, #0181f5 0%, rgba(93, 178, 255, 0.99) 100%)"
          }
     }
}));


const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];
const CaseStudy = () => {
  const classes = useStyles();
 


 
 
  return (
    <div  className={classes.mainDiv}  >
        <div className={classes.h1Div}>
            <h1 className={classes.h1Set} >Case Study</h1>
        </div>

      <Carousel breakPoints={breakPoints} className={classes.sliderResponsive} enableAutoPlay={true} autoPlaySpeed={3000}   
     >
        <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImg}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Finance Solution
             </h5>
             <h3>
             <a className={classes.headingSet} href="!#">Consumer Products Consulting</a>
             </h3>
             </div>
          </div>
        </Card>

        <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImg}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Finance Solution
             </h5>
             <h3>
             <a className={classes.headingSet} href="!#">Consumer Products Consulting</a>
             </h3>
             </div>
          </div>
        </Card>

        <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImg}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Finance Solution
             </h5>
             <h3>
             <a className={classes.headingSet} href="!#">Consumer Products Consulting</a>
             </h3>
             </div>
          </div>
        </Card>

        <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImg}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Finance Solution
             </h5>
             <h3>
             <a className={classes.headingSet} href="!#">Consumer Products Consulting</a>
             </h3>
             </div>
          </div>
        </Card>


        <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImg}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Finance Solution
             </h5>
             <h3>
             <a className={classes.headingSet} href="!#">Consumer Products Consulting</a>
             </h3>
             </div>
          </div>
        </Card>

        
        
      </Carousel>

      <div >
      <Button variant="outlined" className={classes.btnSet}>
             About Us
           </Button>
      </div>

     
    </div>
  );
};

export default CaseStudy;
