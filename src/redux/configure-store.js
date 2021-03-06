import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(rootReducer, applyMiddleware(thunk), initialState, composeEnhancers());
  if (module.hot) { // This part enables Webpack to hot reload reducers
    module.hot.accept('./root-reducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

