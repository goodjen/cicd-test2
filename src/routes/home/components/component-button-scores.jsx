import React from 'react';
import history from '../../../history';

export default () => (
    <button
        className="button-colors-primary button-placement"
        style={{ marginBottom: '3vh' }}
        onClick={() => { history.push('/score'); }}
    >
        Evaluation
    </button>
);

