import React from "react";
import './AppMobile.scss'
import ScrollToTop from "../utils/ScrollToTop";
import Loader from "../components/UI/Loader";
import {Redirect, Route, Switch} from "react-router-dom";

import {connect} from "react-redux";
import MobileBottomNavbar from "../components/MobileBottomNavbar";
import indexMobile from "../containers/IndexMobile";

function AppMobile(props) {

  return (
    <div className="App">
      <ScrollToTop/>
      <Loader classStyle={props.loading ? 'Loader_is-opened' : ''}/>
      <Switch>
        <Route exact path="/" component={indexMobile}/>
        <Redirect to={'/'}/>
      </Switch>
      <MobileBottomNavbar/>
    </div>
  );
}

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMobile)