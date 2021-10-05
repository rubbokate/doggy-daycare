import React, { Component } from 'react';
import { 
  HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home.js';
import { Board } from './components/Board.js/Board.js';
import { Daycare } from './components/Daycare/Daycare.js';
import { Reservation } from './components/Reservation';
import { NoMatch } from './components/NoMatch/NoMatch.js';
import { Layout } from './components/Layouts/Layout.js';
import { NavigationBar } from './components/Navbar/NavigationBar';
import './components/style.css'
import Footer from './components/Modal/Footer';
import { GlowStyle } from './components/Daycare/styles';
import {Jumbotron} from "react-bootstrap";

// why are we using a react fragment??
class App extends Component {
  render() {
    return (

      <div style={{ minWidth: "100%"}}>

        <NavigationBar />

        <div className="container">
      <Jumbotron fluid>
        <h1>Happy Paws Clubhouse</h1>
      </Jumbotron>
    </div>

        <div className="row" style={{ minWidth: "100%", display: "inline-flex" }}>

          <div style={{maxWidth: "10%", marginLeft: "auto", marginRight: "auto", marginTop: "25%", marginBottom: "25%", float: "left"}}>

            <GlowStyle />

          </div>

          <div style={{ maxWidth: "60%"}}>

            <React.Fragment>

              <Router>

                <Layout >

                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/daycare" component={Daycare} />
                    <Route exact path="/reservation" component={Reservation} />
                    <Route component={NoMatch} />
                  </Switch>
                </Layout>

              </Router>

            </React.Fragment>

          </div>

          <div style={{maxWidth: "10%", marginLeft: "auto", marginRight: "auto", marginTop: "25%", marginBottom: "25%", float: "right"}}>

            <GlowStyle />

          </div>

        </div>

        <Footer style={{ minWidth: "100%" }} />

      </div>





    )
  }
}

export default App;
