import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Feeling from "../../pages/DailyFeeling/DailyFeeling";
import Understanding from "../../pages/DailyUnderstanding/DailyUnderstanding";
import Support from "../../pages/DailySupport/DailySupport";
import Comments from "../../pages/DailyComments/DailyComments";

import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Router>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/feeling" component={Feeling} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/supported" component={Support} />
            <Route exact path="/comments" component={Comments} />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
