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
function App() {
  return (
    <Router>
      <CssBaseline />
    <Header/>
      <Switch>
        <Route path="/" exact>
         <Home/>
        </Route>

        {/* <Route path="/services" exact>
          <Services />
        </Route>

        <Route path="/casestudy" exact>
          <CaseStudy />
        </Route> */}
       

        <Route path="" exact></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
