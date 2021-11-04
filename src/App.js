import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header  from "./Components/Header"
import Home from "./Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Services from "./Pages/Home/Services";
import About from "./Pages/Home/About";
function App() {
  return (
    <Router>
      <CssBaseline />
    <Header/>
      <Switch>
        <Route path="/" exact>
         <Home/>
        </Route>

         <Route path="/services" exact>
          <Services/>
        </Route>

        <Route path="/about" exact>
          <About/>
        </Route>

       
       

        <Route path="" exact></Route>
        <Redirect to="/" />
      </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
