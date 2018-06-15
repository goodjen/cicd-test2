import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Header from './components/component-header';
import PageHome from './routes/home/component-page-home';
import ScorePage from './routes/scorePage/component-page-scorePage';
import healthPage from './routes/health/health-page';
import appPage from './routes/applications/app-page';
import sresPage from './routes/sres/sres-page';
import './app.css';

const App = () => (
  <div>
    <Router history={history}>
      <div className="fullscreen">
              <Header />
        <div className="route">
            <Route exact path="/" component={PageHome} />
            <Route exact path="/score" component={ScorePage}/>
            <Route exact path="/health" component={healthPage}/>
            <Route exact path="/applications" component={appPage}/>
            <Route exact path="/sres" component={sresPage}/>
        </div>
      </div>
    </Router>
  </div>

);

export default App;
