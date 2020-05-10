import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import UpcomingLiveConsulation from "./Components/UpcomingLiveConsulation/UpcomingLiveConsulation";
import BuyPlans from "./Components/BuyPlans/Buyplans";
import ViewPlans from "./Components/ViewPlans/ViewPlans";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li >
              <Link to="/">
                <span className="">
                  <small>Upcoming</small> <div className="upcoming"></div>
                </span>
                <br />
                Live Consulation
              </Link>
            </li>
            <li >
              <Link to="/buyplans" >
                Buy plans
                
                 
              </Link>
            </li>
            <li>
              <Link to="/viewplans" >
                View Plans
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="button">Login</span></Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={UpcomingLiveConsulation} />
          <Route path="/buyplans" component={BuyPlans} />
          <Route path="/viewplans" component={ViewPlans} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
