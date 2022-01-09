import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Services from "./Pages/Home/Services";
import About from "./Pages/Home/About";
import CaseStudyInnerPage from "./Pages/Home/CaseStudyInnerPage/CaseStudyInnerPage";
import Blog from "./Pages/Home/Blog/Blog";
import Login from "./Pages/Home/Login";
import { SnackbarProvider } from "notistack";
import Signup from "./Pages/Home/Signup";
import ScrollTopTop from "../src/Components/ScrollToTop"
import ContactForm from "./Pages/Home/ContactForm";

function App() {
  console.log(window.location.pathname);
  return (
    <Router>
      <ScrollTopTop/>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        {/* <Header/> */}

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/services" exact>
            <Services />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/casestudy" exact>
            <CaseStudyInnerPage />
          </Route>

          <Route path="/contactform" exact>
            <ContactForm/>
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
           <Signup/>
          </Route>

          <Route path="" exact></Route>
          <Redirect to="/" />
        </Switch>
        {/* <Footer/> */}
      </SnackbarProvider>
    </Router>
  );
}

export default App;
