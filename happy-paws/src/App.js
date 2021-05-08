import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home/Home.js';
import {Board} from './components/Board.js/Board.js';
import {Daycare} from './components/Daycare/Daycare.js';
import {Train} from './components/Train/Train.js';
import {NoMatch} from './components/NoMatch/NoMatch.js';
import {Layout} from './components/Layout/Layout.js';
import { NavigationBar } from './components/Navbar/NavigationBar';
import {Jumbotron} from 'react-bootstrap';
import './components/style.css'
import {Card} from 'react-bootstrap'
import Pupcake from './components/data/icons/pupcake-1.jpeg'

class App extends Component {
  render() {
    return (
      
    <React.Fragment>
    <NavigationBar />
    <div className="container">
    <Jumbotron fluid>
    <h1>Happy Paws Clubhouse</h1>
    </Jumbotron>
    </div>
    <div className="card-deck">
    <Card id="ctp" className="col-sm-6">
  <Card.Img variant="top" src= {Pupcake} />
  <Card.Body>
    <Card.Title id="pawery">The Pawery</Card.Title>
    <Card.Text>
    Get some yummy homemade goodies from the shop!
    </Card.Text>
  </Card.Body>
</Card>
   <Card id="dc" style={{ width: '15rem' }}>
  <Card.Img variant="top" src= {Pupcake} />
  <Card.Body>
    <Card.Title id="pawery">The Pawery</Card.Title>
    <Card.Text>
    Get some yummy homemade goodies from the shop!
    </Card.Text>
  </Card.Body>
</Card>
</div>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/board" component={Board} />
            <Route path="/daycare" component={Daycare} />
            <Route path="/train" component={Train} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>

    )}
}



export default App;
