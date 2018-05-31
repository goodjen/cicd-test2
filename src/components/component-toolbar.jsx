import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './component-button-back';

const Toolbar = ({ onClickBack, showBack }) => (
  <div className="footer">
    { showBack ? <BackButton onClick={onClickBack} /> : '' }
  </div>
);

Toolbar.propTypes = {
  onClickBack: PropTypes.func,
  showBack: PropTypes.bool
};

Toolbar.defaultProps = {
  onClickBack: undefined,
  showBack: true
};

export default Toolbar;
