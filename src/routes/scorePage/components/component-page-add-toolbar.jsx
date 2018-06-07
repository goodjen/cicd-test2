import React from 'react';
import history from '../../../history';

export default () => <Toolbar onClickBack={() => { history.goBack(); }} />;
