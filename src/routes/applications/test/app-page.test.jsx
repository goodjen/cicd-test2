import { fetchApps } from '../components/appActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {FETCH_APPS_BEGIN} from '../components/appActions';
import FETCH_APPS_SUCCESS from '../components/appActions';
import FETCH_APPS_ERROR from '../components/appActions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        }
    });
};

it('check fetchApps', () => {

    const store = mockStore({id: 1234, isFetching: false });
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, '{"ids":{"provider":5}}')));

    return store.dispatch(fetchApps())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({type: FETCH_APPS_BEGIN});
            // expect(expectedActions).toContainEqual({type: FETCH_APPS_SUCCESS});
            // expect(expectedActions).toContainEqual({type: FETCH_APPS_ERROR});
        })
});