import React, { useState, useEffect } from "react";
import { buttons } from "./CaseStudyData";
import {getCasestudy,filtercasestudy } from "./CaseStudyService";
import background from "../../../Assets/bradcam.png";
import Card from "@material-ui/core/Card";
import "./casestudy.css";
import { makeStyles} from "@material-ui/core";
import Wrapper from "../../../Components/wrapper.comp";




const useStyles = makeStyles((theme) => ({
    
        btnHeading:{
            marginRight:"10px",borderRadius:"10px",background:"transparent",color:"black"
        },
   
      cardSet:{
          borderRadius:"10px",width:"350px",boxShadow:"0 3px 6px rgb(0 0 0 / 5%)",marginBottom:"60px",overflow:"hidden",
        },
      imgDiv:{
        display:"flex",justifyContent:"center",flexDirection:"column",
      }
       ,
       spanDiv:{
        color:"#919191",fontSize:"15px",fontWeight:"400"
       },
       parentDiv:{
        padding:"25px 29px",
        display: "flex",
        flexDirection: "column-reverse"
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
  
const CaseStudyInnerPage = () => {
    const classes = useStyles();
    const [filteredCaseStudy, setFiltredCaseStudy] = useState(null);



    useEffect(() => {
        setFiltredCaseStudy(getCasestudy());
      }, []);


      function handleCaseStudy(e) {
        let casestudyType = e.target.value;
        casestudyType !== "all"
          ? setFiltredCaseStudy(filtercasestudy(casestudyType))
          : setFiltredCaseStudy(getCasestudy());
      }
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
          <h1 style={{ fontSize: "60px" }}>Case Study</h1>
        </div>
        </div>
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"50px",flexWrap:"wrap",gap:"10px"}}>
             {buttons &&
        buttons.map((type, index) => (
          <>
            <button style={{background:"transparent", color:"#5DB2FF" ,border:"2px solid #5DB2FF", borderRadius:"15px",width:"150px",marginRight:"5px"}}  key={index} value={type.value} onClick={handleCaseStudy}>
              {type.name}
            </button>
          </>
        ))}



</div>

            <div className="case-study_cards" style={{ width:"1440px",
        margin:"0 auto",
        display:"flex",justifyContent:"center",marginTop:"30px",alignItems:"center",flexWrap:"wrap",gap:"20px",}}>

           

        {filteredCaseStudy &&
        filteredCaseStudy.map(type => (
            <Card className={classes.cardSet}>
          <div className={classes.imgDiv}>
          <img  alt=""  src={type.imgUrl}/>
           <div className={classes.parentDiv}>
             <h5 className={classes.spanDiv}>
            {type.name}
             </h5>
            
             <h3 className={classes.headingSet} >{type.desc}</h3>
            
             </div>
          </div>
        </Card>


        ))}
        
        </div>
        
       
            
          
          </Wrapper>
        
    )
}

export default CaseStudyInnerPage
