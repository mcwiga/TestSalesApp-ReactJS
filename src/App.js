import React, { Component } from "react";
import "./tutushare.css";
import NavBar from "./components/tutuNavbar/navbar";
import Pricingtable from "./components/Pricing-table/Pricing-table";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  freeTrial() {
    console.log("free Trial Clicked");
  }
  render() {
    return (
      <React.Fragment>
        <div className="App body-tutu">
          <div>
            <NavBar />
          </div>

          <div className="header-tutu">
            <h1>Welcome to TutuShare</h1>
            <p>Hello world</p>
          </div>
          <div>
            <Pricingtable onClick={() => this.freeTrial()} />
          </div>
          <div className="main-tutu">
            <h5>Paragraph1</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla.{" "}
            </p>
            <h5>Paragraph1</h5>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur sodales ligula in
              libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
              nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas
              porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus
              non, massa.{" "}
            </p>
            <h5>Paragraph1</h5>
            <p>
              Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
              metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
              Quisque volutpat condimentum velit. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
              nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
              adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.
              Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus
              consequat imperdiet. Vestibulum sapien. Proin quam.{" "}
            </p>
            <h5>Paragraph1</h5>
            <p>
              Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed
              lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
              vitae pharetra auctor, sem massa mattis sem, at interdum magna
              augue eget diam. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie
              dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
              augue congue elementum. Morbi in ipsum sit amet pede facilisis
              laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et,
              augue.{" "}
            </p>
            <h5>Paragraph1</h5>
            <p>
              Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim.
              Curabitur sit amet mauris. Morbi in dui quis est pulvinar
              ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.
              Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.
              Quisque nisl felis, venenatis tristique, dignissim in, ultrices
              sit amet, augue.{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
