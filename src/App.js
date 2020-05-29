import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import Home from "./components/Page/Home";
import ApplyNow from "./components/Page/ApplyNow";
import CodeOfConduct from "./components/Page/CodeOfConduct/CodeOfConduct";
import Footer from "./components/Footer/Footer";
import Team from "./components/Page/Team/Team";
import FAQ from "./components/Page/FAQ/FAQ";

class App extends Component {
  state = {
    page: 'Apply Now',
    displayNav: false
  };

  clickedHandler = {
    toggleNav: () => {
      this.setState({displayNav: !this.state.displayNav})
    },
    disableNav: () => {
      this.setState({displayNav: false})
    }

  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar clicked={this.clickedHandler} displayNav={this.state.displayNav}/>
          <Switch>
            <Route exact path={"/"} render={Home}/>
            <Route exact path={"/apply-now"} component={ApplyNow}/>
            <Route exact path={"/code-of-conduct"} component={CodeOfConduct}/>
            <Route exact path={"/team"} component={Team}/>
            <Route exact path={"/faq"} component={FAQ}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
