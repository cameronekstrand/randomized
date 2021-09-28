import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import { BrowserRouter, BrowserRouter as Switch, Route } from 'react-router-dom';
import { Scripts } from './Components/Scripts';
import { Home } from './Components/Home';
import {Null} from './Components/Null';

const App = () => (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Null />
          <div>
            <Route path="/scripts" component={ Scripts }/>
            <Route exact path="/" component={ Home }/>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );


export default App;
