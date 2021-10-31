import React from "react";
import { makeStyles } from "@material-ui/core";
import background from "../../Assets/counter.png"
import Group from "../../SVGIcons/Group"
import Cart from "../../SVGIcons/Card";
import Heart from "../../SVGIcons/Heart";
import Respect from "../../SVGIcons/Respect";

const useStyles = makeStyles((theme) => ({
  setDiv: {
    display:"flex",
      marginTop:"50px",
      backgroundImage: `url(${background})`,
      height: "30em",
      width: "100%",
      filter: "opacity(0.5) drop-shadow(0 0 0 black)",
  },
    setInnerDiv : {
        width:"100%",
        display:"flex",
        justifyContent:"space-evenly",
        marginLeft:"auto",
        marginRight:"auto"
    },
    setItem: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        textAlign:"center"
    }
}));
const HappiestClient = () => {
  const classes = useStyles();
  return (
    <div className={classes.setDiv}>
        
       <div className={classes.setInnerDiv}>

        <div className={classes.setItem} >
            <Group/>
            <h1>200 +</h1>
            <h5>Team Members</h5>
        </div>

        <div className={classes.setItem} >
            <Cart/>
            <h1>97 %</h1>
            <h5>Business Success</h5>
        </div>

        <div className={classes.setItem} >
            <Heart/>
            <h1>5628</h1>
            <h5>Happy Client</h5>
        </div>
        
        <div className={classes.setItem} >
            <Respect/>
            <h1>5637</h1>
            <h5>Business Done</h5>
        </div>

           </div>         
          

          
    </div>
  );
};

export default HappiestClient;
