import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home.js';
import {Board} from './Board.js';
import {Daycare} from './Daycare.js';
import {Train} from './Train.js';
import {NoMatch} from './NoMatch.js';
import {Layout} from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';

class App extends Component {
  render() {
    return (
    <React.Fragment>
    <NavigationBar />
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
  );
}
}

export default App;
