import React, {useEffect} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import './App.css';
import 'normalize.css';
import {fetchCartItems, fetchCities, rewriteCart} from "./actions";
import {connect} from "react-redux";
import HeaderDesktop from "./components/HeaderDesktop";
import IndexDesktop from "./containers/IndexDesktop/IndexDesktop";
import ScrollToTop from "./utils/ScrollToTop";
import getLocation from "./utils/dadata";
import Loader from "./components/UI/Loader";

function App(props) {

  useEffect(() => {
    getLocation()
      .then((response => {
        console.log(response)
      }))


    // props.fetchCities();
    // if (localStorage.getItem("cart")) {
    //   props.rewriteCart(JSON.parse(localStorage.getItem("cart")))
    //
    //   серия запросов - формируется массив элементов корзины
    //   props.fetchCartItems()
    // }
  }, [])

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(props.cart));
  // }, [props.cart])

  return (
    <div className="App">
      <ScrollToTop/>
      <Loader classStyle={props.loading ? 'Loader_is-opened' : ''}/>
      <HeaderDesktop/>
      <Switch>
        <Route exact path="/" component={IndexDesktop}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({cart, loading}) => {
  return {cart, loading}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities()),
    rewriteCart: (item) => dispatch(rewriteCart(item)),
    fetchCartItems: () => dispatch(fetchCartItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
