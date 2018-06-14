import { fetchApps } from '../components/appActions';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import FETCH_APPS_BEGIN from '../components/appActions';
import FETCH_APPS_SUCCESS from '../components/appActions';
import FETCH_APPS_ERROR from '../components/appActions';

const mockStore=configureStore([thunkMiddleware]);
const initialState={};
const store=mockStore(initialState);

it('check fetchApps', () => {
    return store.dispatch(fetchApps())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({type: FETCH_APPS_BEGIN});
            expect(expectedActions).toContainEqual({type: FETCH_APPS_SUCCESS});
            expect(expectedActions).toContainEqual({type: FETCH_APPS_ERROR});
        })
});