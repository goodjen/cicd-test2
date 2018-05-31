import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({ onClick }) => (
  <button
    className="button-colors-secondary button-slim button-placement"
    onClick={onClick}
  >
    Back
  </button>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default BackButton;
