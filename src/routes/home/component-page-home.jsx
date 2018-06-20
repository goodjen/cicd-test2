import React from 'react';
import ScoreButton from './components/component-button-scores';

const PageHome = () => (
    <div className="page">
        <div className="page-content column align-center box">
            <h2>Find out how your services have been performing! <hr />
            </h2>
            <ScoreButton />
        </div>
    </div>
);

export default PageHome;

//Could include a search function to look at the services they are in charge of