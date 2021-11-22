import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Intro from 'Sections/Intro/Intro';
import Page from 'Components/Page/Page';
import Home from 'Pages/Home/Home';
import Works from 'Pages/Works/Works';
import { ROUTE_CONST, appBasePath } from 'appConst';
import 'global.scss';
import './App.scss';
import 'App.css';
import logo from './logo.svg';


function App(props) {
  const match = props.match;
  return (
    <div className="App application-container">
      <Router basename={appBasePath}>
        <Switch>
          <Route path={ROUTE_CONST.HOME} exact>
            <Page><Home /></Page>
          </Route>
          <Route path={ROUTE_CONST.WORKS} >
            <Page><Works /></Page>
          </Route>
          {/* <Route exact path="/blog" render={() => { window.location.href = "public/index.html" }} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
