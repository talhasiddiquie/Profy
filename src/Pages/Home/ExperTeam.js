import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import img1 from "../../Assets/woman.jpg";
import img2 from "../../Assets/man.png";
import img3 from "../../Assets/woman.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    flexDirection: "column",
    alignItems: "center",
  },
  h1Div: {
    marginBottom: "40px",
  },
  h1Set: {
    fontSize: "46px",
    fontWeight: "300",
    lineHeight: "76px",
    color: "#001D38",
    position: "relative",
    zIndex: "0",
    paddingBottom: "10px",
  },
  cardDiv: {
    marginBottom: "50px",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "93%",
    },
  },
  setTeamDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
  },
  setIcons: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
  setIconMargin: {
    marginRight: "5px",
  },
  setCardMargin: {
    marginRight: "20px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      marginRight: "0px",
    },
  },
  imgRadius: {
    width: "100%",
    // borderRadius:"25px",
  },
  imgWidth: {
    width: "100%",
  },
}));

const ExperTeam = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.h1Div}>
        <h1 className={classes.h1Set}>Expert Team</h1>
      </div>

      <div className={classes.cardDiv}>
        <Card className={classes.setCardMargin}>
          <div className={classes.imgRadius}>
            <img className={classes.imgWidth} alt="" src={img1} />
          </div>
          <div className={classes.setTeamDiv}>
            <h3>Maria Khan</h3>
            {/* <p>Photographer</p> */}
            <div className={classes.setIcons}>
              <FaFacebookF 
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.facebook.com/profile.php?id=100076819751499");
                }}
                className={classes.setIconMargin}
              />

              <FaTwitter
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://twitter.com/MariaKh94322531");
                }}
                className={classes.setIconMargin}
              />
              <FaInstagram
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.instagram.com/mariakhan0433/");
                }}
              />
            </div>
          </div>
        </Card>

        
        <Card className={classes.setCardMargin}>
          <div className={classes.imgRadius}>
            <img className={classes.imgWidth} alt="" src={img3} />
          </div>
          <div className={classes.setTeamDiv}>
            <h3>Moazzama Batool</h3>
            {/* <p>Photographer</p> */}
            <div className={classes.setIcons}>
              <FaFacebookF
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("facebook.com/profile.php?id=100076451067682");
                }}
                className={classes.setIconMargin}
              />

              <FaTwitter
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://twitter.com/MoazammaB");
                 
                }}
                className={classes.setIconMargin}
              />
              <FaInstagram
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.instagram.com/moazammabatoool");
                }}
              />
            </div>
          </div>
        </Card>

        

        <Card className={classes.setCardMargin}>
          <div className={classes.imgRadius}>
            <img className={classes.imgWidth} alt="" src={img3} />
          </div>
          <div className={classes.setTeamDiv}>
            <h3>Syeda Neha Jilani</h3>
            {/* <p>Photographer</p> */}
            <div className={classes.setIcons}>
              <FaFacebookF
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.facebook.com/profile.php?id=100076627998620");
                }}
                className={classes.setIconMargin}
              />

              <FaTwitter
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://twitter.com/jilani_neha");
                }}
                className={classes.setIconMargin}
              />
              <FaInstagram
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.instagram.com/snehaj0433/");
                }}
              />
            </div>
          </div>
        </Card>



        <Card className={classes.setCardMargin}>
          <div className={classes.imgRadius}>
            <img className={classes.imgWidth} alt="" src={img2} />
          </div>
          <div className={classes.setTeamDiv}>
            <h3>Ahmed Zaman</h3>
            {/* <p>Photographer</p> */}
            <div className={classes.setIcons}>
              <FaFacebookF
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.facebook.com/profile.php?id=100076998724246");
                }}
                className={classes.setIconMargin}
              />

              <FaTwitter
               onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://twitter.com/azk0433");
                }}
                className={classes.setIconMargin}
              />
              <FaInstagram
              onMouseOver={({target})=>target.style.color='blue'} 
               onMouseOut={({target}) =>target.style.color="black"}
                onClick={() => {
                  window.open("https://www.instagram.com/ahmed_zaman0433/");
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExperTeam;
