import React from 'react';
import ScoreButton from './components/component-button-scores';

const PageHome = () => (
  <div className="page">
    <div className="page-content column align-center box">
        <h2>Find out how your services have been performing! <hr />
         dev mode</h2>
      <ScoreButton />
    </div>
  </div>
);

export default PageHome;
