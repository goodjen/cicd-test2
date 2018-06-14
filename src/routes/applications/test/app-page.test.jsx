import { fetchApps } from '../components/appActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {FETCH_APPS_BEGIN} from '../components/appActions';
import {FETCH_APPS_SUCCESS} from '../components/appActions';
import {FETCH_APPS_ERROR} from '../components/appActions';

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

it('check fetchApps success', () => {

    const store = mockStore({id: 1234, isFetching: false });
    const payload = {apps: {id:1}};
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, '{"id":1}')));

    return store.dispatch(fetchApps())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({type: FETCH_APPS_BEGIN});
            expect(expectedActions).toContainEqual({type: FETCH_APPS_SUCCESS, payload});
        })
});

it('calls request and failure actions if the fetch response was not successful', () => {

    const store = mockStore({id: 1234, isFetching: false });
    const payload = {error: 'Super Fail'};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(400, 'Super Fail')));

    return store.dispatch(fetchApps())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({"type": FETCH_APPS_BEGIN});
            expect(expectedActions).toContainEqual({"type": FETCH_APPS_ERROR, payload});
        })
});

