import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { auth, db } from "../../Firebase";
import { Redirect } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import "./contactform.css";

const useStyles = makeStyles((theme) => ({
  paperSet: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
    height: "600px",
    borderRadius: "10px",
  },
  formSet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textFieldWidth: {
    width: "80%",
  },
  loginbtn: {
    marginTop: "20px",
    width: "60%",
  },
  backGround: {
    width: "100%",
    background: "blue",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleContactForm = () => {
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        enqueueSnackbar("Your message has been submitted👍", {
          variant: "success",
        });
      })
      .catch((error) => {
        console.log(error,"------------->")
        enqueueSnackbar("Error", error, { variant: "error" });
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        background: "#0c1f3c",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {flag ? <Redirect push to="/contactform" /> : null}
      <Paper id="ContactFormmainDiv" className={classes.paperSet} elevation={3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h1>Contact Form</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextField
            className={classes.textFieldWidth}
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            className={classes.textFieldWidth}
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className={classes.textFieldWidth}
            style={{ marginBottom: "20px" }}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            value={message}
            multiline
            rows={8}
            maxRows={10}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            className={classes.loginbtn}
            variant="contained"
            style={{
              backgroundColor: "#0c1f3c",

              color: "#fff",
            }}
            onClick={handleContactForm}
          >
            Submit
          </Button>

          <Link style={{ textDecoration: "none" }} to="/">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#0c1f3c",
                marginTop: "15px",
                color: "#fff",
              }}
            >
              Back
            </Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default ContactForm;
