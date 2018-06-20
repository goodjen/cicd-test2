import { fetchSres } from '../components/sresAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {FETCH_SRES_BEGIN} from '../components/sresAction';
import {FETCH_SRES_SUCCESS} from '../components/sresAction';
import {FETCH_SRES_ERROR} from '../components/sresAction';

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

    it('check fetchSres success', () => {

            const store = mockStore({id: 1234, isFetching: false });
            const payload = {sres: {id:1}};
            window.fetch = jest.fn().mockImplementation(() =>
                    Promise.resolve(mockResponse(200, null, '{"id":1}')));

                return store.dispatch(fetchSres())
                    .then(() => {
                        const expectedActions = store.getActions();
                        expect(expectedActions).toContainEqual({type: FETCH_SRES_BEGIN});
                        expect(expectedActions).toContainEqual({type: FETCH_SRES_SUCCESS, payload});
                    })
        });

    it('calls request and failure actions if the fetch response was not successful', () => {


        const store = mockStore({id: 1234, isFetching: false});
        const payload = {error: 'Super Fail'};
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(400, 'Super Fail')));


        return store.dispatch(fetchSres())

    .
        then(() => {

            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({"type": FETCH_SRES_BEGIN});
            expect(expectedActions).toContainEqual({"type": FETCH_SRES_ERROR, payload});

        })
    });