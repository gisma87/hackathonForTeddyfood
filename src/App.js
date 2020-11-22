import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import './App.css';
import 'normalize.css';
import {connect} from "react-redux";
import HeaderDesktop from "./components/HeaderDesktop";
import IndexDesktop from "./containers/IndexDesktop/IndexDesktop";
import ScrollToTop from "./utils/ScrollToTop";
import Loader from "./components/UI/Loader";
import Profile from "./containers/Profile/Profile";

function App(props) {

  return (
    <div className="App">
      <ScrollToTop/>
      <Loader classStyle={props.loading ? 'Loader_is-opened' : ''}/>
      <HeaderDesktop/>
      <Switch>
        <Route exact path="/" component={IndexDesktop}/>
        <Route exact path="/profile/" component={Profile}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
