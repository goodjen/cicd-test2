import React from 'react';
import Toolbar from '../../../components/component-toolbar';
import history from '../../../history';

export default () => <Toolbar onClickBack={() => { history.goBack(); }} />;
