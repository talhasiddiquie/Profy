import React from "react";
import { makeStyles,Button } from "@material-ui/core";
import Carousel from 'react-elastic-carousel';
import sliderImgOne from "../../Assets/bigdata.jpg"
import sliderImgTwo from "../../Assets/development.png"
import sliderImgThree from "../../Assets/bi.jpg"
import sliderImgFour from "../../Assets/case4.jpeg"
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

import "./casestudy.css"


const useStyles = makeStyles((theme) => ({
  mainDiv:{
      width:"100%",
    display:"flex",justifyContent:"center",marginTop:"30px",flexDirection:"column",alignItems:"center"
  },
    sliderResponsive:{
      width:"70%!important",
      [theme.breakpoints.down("md")]: {
        width:"100%!important",
      },
      
    },
    cardSet:{
        borderRadius:"10px",width:"95%",boxShadow:"0 3px 6px rgb(0 0 0 / 5%)",marginBottom:"60px",overflow:"hidden" ,gap:"10px",height:"460px"
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
  { width: 1200, itemsToShow: 3 },
  { width: 1400, itemsToShow: 3 }
];
const CaseStudy = () => {
  const classes = useStyles();
 


 
 
  return (
    <div  className={classes.mainDiv}  >
        <div className={classes.h1Div}>
            <h1 className={classes.h1Set} >Case Study</h1>
        </div>

      <Carousel  breakPoints={breakPoints} className={classes.sliderResponsive}  enableAutoPlay={true} autoPlaySpeed={3000}   
     >
        <Card id="settoCard" className={classes.cardSet}>
          <div  className={classes.imgDiv}>
          <img  alt=""  src={sliderImgOne}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             The new system was 100 times faster compared to the old one and could process 1,000 different data formats.
             </h5>
            
             <h3 className={classes.headingSet} href="!#">Big Data Implementation for Channel in 10+ Countries</h3>
            
             </div>
          </div>
        </Card>

        <Card id="settoCard" className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImgTwo}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             The company's star product hybrid mobile apps now power T-Mobile,Orange and other telecom industry leaders.
             </h5>
            
             <h3 className={classes.headingSet} href="!#">Development Web-based Management System</h3>
             
             </div>
          </div>
        </Card>

        <Card id="settoCard" className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImgThree}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Solution consists of  application for management and reporting along with an analytical data warehouse.
             </h5>
            
             <h3 className={classes.headingSet} href="!#">BI Implementation for Healthcare Centers</h3>
             
             </div>
          </div>
        </Card>

        {/* <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={sliderImgFour}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
             Finance Solution
             </h5>
             <h3>
             <a className={classes.headingSet} href="!#">Consumer Products Consulting</a>
             </h3>
             </div>
          </div>
        </Card> */}


       

        
        
      </Carousel>

      <div >

      <Link style={{textDecoration:"none"}}  to="/casestudy" >
      <Button variant="outlined" className={classes.btnSet}>
            More
           </Button>
                </Link>
      
      </div>

     
    </div>
  );
};

export default CaseStudy;
