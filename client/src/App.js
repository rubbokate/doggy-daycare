import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home.js';
import { Board } from './components/Board.js/Board.js';
import { Daycare } from './components/Daycare/Daycare.js';
import { Reservation } from './components/Reservation';
import { NoMatch } from './components/NoMatch/NoMatch.js';
import { Layout } from './components/Layouts/Layout.js';
import { NavigationBar } from './components/Navbar/NavigationBar';
import './components/style.css'
import Footer from './components/Modal/Footer';


class App extends Component {
  render() {
    return (

      <React.Fragment>
        <NavigationBar />
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/board" component={Board} />
              <Route path="/daycare" component={Daycare} />
              <Route path="/Reservation" component={Reservation} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>


      </React.Fragment>

    )
  }
}



export default App;
