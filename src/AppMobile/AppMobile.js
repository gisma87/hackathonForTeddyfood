import React, {useEffect} from "react";
import './AppMobile.scss'
import ScrollToTop from "../utils/ScrollToTop";
import Loader from "../components/UI/Loader";
import {Redirect, Route, Switch} from "react-router-dom";
import {fetchCities, rewriteCart} from "../actions";
import {connect} from "react-redux";
import MobileBottomNavbar from "../components/MobileBottomNavbar";
import indexMobile from "../containers/IndexMobile";

function AppMobile(props) {

  // useEffect(() => {
  //   props.fetchCities();
  //   if (localStorage.getItem("cart")) {
  //     props.rewriteCart(JSON.parse(localStorage.getItem("cart")))
  //   }
  // }, [])

  return (
    <div className="App">
      <ScrollToTop/>
      <Loader classStyle={props.loading ? 'Loader_is-opened' : ''}/>
      <Switch>
        <Route exact path="/" component={indexMobile}/>
      </Switch>
      <MobileBottomNavbar/>
    </div>
  );
}

const mapStateToProps = ({cart, loading}) => {
  return {cart, loading}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities()),
    rewriteCart: (item) => dispatch(rewriteCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMobile)