import React from "react";
import { makeStyles } from "@material-ui/core";
import formImg from "../../Assets/contact_thumb.png";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
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
  }));

const GetFreeQuote  = () => {
    const classes = useStyles();
    return (
        <div
        style={{
          marginTop: "30px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingRight: "-15px",
          paddingLeft: "-15px",
          paddingBottom: "100px",
        }}
      >
        <div className={classes.form}>
          <div className={classes.formDivSet}>
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
              Get Free Quote
            </Typography>

            <TextField
              style={{ marginTop: "30px" }}
              id="standard-basic"
              label="Your Name"
              variant="standard"
            />
            <TextField
              style={{ marginTop: "30px" }}
              id="standard-basic"
              label="Email"
              variant="standard"
            />

            <TextField
              style={{ marginTop: "30px" }}
              rows={5}
              multiline
              id="standard-basic"
              label="Message"
              variant="standard"
            />

            <Button
              style={{
                marginTop: "30px",
               
                backgroundColor: "#2594F8",
                borderRadius: "20px",
                color: "white",
              }}
              variant="contained"
            >
              Send
            </Button>
          </div>
          <div className={classes.imgSet}>
            <img
              style={{ borderRadius: "20px", width: "100%" }}
              src={formImg}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    )
}

export default GetFreeQuote;