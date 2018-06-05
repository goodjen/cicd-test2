import React from 'react';
import ScoreButton from './components/component-button-scores';
import Toolbar from '../../components/component-toolbar';

const PageHome = () => (
  <div className="page">
    <div className="page-content column align-center box">
        <h2>Find out how your services have been performing!</h2>
      <ScoreButton />
    </div>
    <Toolbar showBack={false} />
  </div>
);

export default PageHome;
