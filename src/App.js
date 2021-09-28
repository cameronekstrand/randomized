import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import { BrowserRouter, Link, BrowserRouter as Switch, Route } from 'react-router-dom';
import { Scripts } from './Components/Scripts';
import { Home } from './Components/Home';
import {Null} from './Components/Null';

const App = () => (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Null />
          <div>
            <Route path='/scripts' component={ Scripts }/>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={ Home }/>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );


export default App;
