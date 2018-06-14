import { combineReducers } from 'redux';
import appReducer from '../routes/applications/components/appReducer';
import sresReducer from '../routes/sres/components/sresReducer';

const rootReducer = combineReducers({
  appPage: appReducer,
  sresPage: sresReducer
});

export default rootReducer;


