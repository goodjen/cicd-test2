import { combineReducers } from 'redux';
import appReducer from '../routes/applications/components/appReducer'

const rootReducer = combineReducers({
  appPage: appReducer
});

export default rootReducer;


