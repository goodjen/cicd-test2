import React, { Component } from 'react';
import PageAddToolbar from './components/component-page-add-toolbar';

class ScorePage extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-content box">
                    <div className="row align-center" style={{height: '20vh'}}>
                        <h2>How are you doing?</h2>
                        This is where the data and stuff would go, woo!


                    </div>
                </div>
                <PageAddToolbar/>
            </div>
        );
    }
}

export default ScorePage;
