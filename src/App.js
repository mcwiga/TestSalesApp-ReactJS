import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./components/contactForm";
import SideDrawer from "./components/sidedraw/SideDrawer";
import Toolbar from "./components/toolbar/Toolbar";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler} />;
    }

    return (
      <div className="App">
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
        <div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Sign Up
          </a>
        </div>
        <Portfolio></Portfolio>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="assets/img/logos/envato.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="assets/img/logos/designmodo.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="assets/img/logos/themeforest.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="assets/img/logos/creative-market.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-left">
                Copyright © Tutu Share
              </div>
              <div className="col-lg-4 my-3 my-lg-0">
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </div>
              <div className="col-lg-4 text-lg-right">
                <a className="mr-3" href="#!">
                  Privacy Policy
                </a>
                <a href="#!">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
