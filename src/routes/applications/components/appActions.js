import { API_ROOT } from '../../../api-config';

export function fetchApps() {
    return dispatch => {
        dispatch(fetchAppsBegin());
        return fetch(`${API_ROOT}/applications`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchAppsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchAppsError(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_APPS_BEGIN   = 'FETCH_APPS_BEGIN';
export const FETCH_APPS_SUCCESS = 'FETCH_APPS_SUCCESS';
export const FETCH_APPS_ERROR = 'FETCH_APPS_ERROR';

export const fetchAppsBegin = () => ({
    type: FETCH_APPS_BEGIN
});

export const fetchAppsSuccess = apps => ({
    type: FETCH_APPS_SUCCESS,
    payload: { apps }
});

export const fetchAppsError = error => ({
    type: FETCH_APPS_ERROR,
    payload: { error }
});