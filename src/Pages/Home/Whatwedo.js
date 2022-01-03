import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import img1 from "../../Assets/2c.png";
import img2 from "../../Assets/4c.png";


const useStyles = makeStyles((theme) => ({
  boxresponsive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  cardDiv: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  cardSet: {
    margin: "30px",
    width: "20%",
    textAlign: "center",
    padding: "35px",
    height: "310px",
    transition: "0.3",
    border: "1px solid #E8E8E8",
    '&:hover': {
        border:"none"
     },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "320px",
    },
  },

  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },

  imgSet: {
    marginLeft: "80px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
    },
  },

  formDivSet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "50px",
      paddingRight: "50px",
      width: "100%",
    },
  },
  setReponseiveFonts:{
    fontSize: "50px", fontWeight: "300",
    [theme.breakpoints.down("md")]: {
        fontSize: "40px",
      },
  },
  mainDivSet:{
    width: "100%",
    paddingLeft:"150px",
    paddingRight:"150px",
    [theme.breakpoints.down("md")]: {
        paddingLeft:"0px",
        paddingRight:"0px",
      },
  }
}));

const Whatwedo = () => {
  const classes = useStyles();
  return (
    <div>
      
      <div className={classes.mainDivSet}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <h1 className={classes.setReponseiveFonts}>What we Do?</h1>
        </div>
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingRight: "-15px",
            paddingLeft: "-15px",
          }}
        >
          <div className={classes.boxresponsive}>
            <Card variant="outlined" className={classes.cardSet}>
              <img src={img1} alt='' />
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                variant="h5"
                component="h2"
              >
               Gather Requirements for BI Solution

              </Typography>
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
               
              </Typography>
            </Card>

            <Card variant="outlined" className={classes.cardSet}>
              <img src={img2} alt='' />
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                variant="h5"
                component="h2"
              >
                Collect and Integrate data from data Sources
              </Typography>
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
             
              </Typography>
            </Card>

            <Card  variant="outlined" className={classes.cardSet}>
              <img src={img2} alt='' />
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                variant="h5"
                component="h2"
              >
                Transform, Clean & Prepare Data
              </Typography>
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
               
              </Typography>
            </Card>
          </div>

          <div className={classes.boxresponsive}>
            <Card variant="outlined" className={classes.cardSet}>
              <img src={img1} alt='' />
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                variant="h5"
                component="h2"
              >
                Explore data & Get Insights

              </Typography>
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
               
              </Typography>
            </Card>

            <Card  variant="outlined" className={classes.cardSet}>
              <img src={img2}  alt='' />
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                variant="h5"
                component="h2"
              >
                Data Visualization & Dashboards

              </Typography>
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
              
              </Typography>
            </Card>

            <Card variant="outlined" className={classes.cardSet}>
            <img src={img2}  alt='' />
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                variant="h5"
                component="h2"
              >
                Future Sales Prediction

              </Typography>
              <Typography
                style={{
                  color: "#001D38",
                  fontWeight: "300",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                variant="body1"
                color="textSecondary"
                component="p"
              >
              
              </Typography>
            </Card>
          </div>
        </div>
      </div>

      

      </div>
  );
};

export default Whatwedo;
