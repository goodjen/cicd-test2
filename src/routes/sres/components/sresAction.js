import apiConfig from '../../../api-config';

export function fetchSres(){
    return dispatch => {
        dispatch(fetchSresBegin());
        return fetch(`${apiConfig()}/sres`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchSresSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchSresError(error.message)));
    };
}

function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_SRES_BEGIN = 'FETCH_SRES_BEGIN';
export const FETCH_SRES_SUCCESS = 'FETCH_SRES_SUCCESS';
export const FETCH_SRES_ERROR = 'FETCH_SRES_ERROR';

export const fetchSresBegin = () => ({
    type: FETCH_SRES_BEGIN
});
export const fetchSresSuccess = sres => ({
    type: FETCH_SRES_SUCCESS,
    payload: { sres }
});
export const fetchSresError = error => ({
    type: FETCH_SRES_ERROR,
    payload: { error }
});