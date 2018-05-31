import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Header from './components/component-header';
import PageHome from './routes/home/component-page-home';
import ScorePage from './routes/scorePage/component-page-scorePage';
import './app.css';

const App = () => (
  <div>
    <Router history={history}>
      <div className="fullscreen">
        <Header />
        <div className="route">
          <Route exact path="/" component={PageHome} />
            <Route exact path="/score" component={ScorePage}/>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
