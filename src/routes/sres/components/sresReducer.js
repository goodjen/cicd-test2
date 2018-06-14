import{
    FETCH_SRES_BEGIN,
    FETCH_SRES_SUCCESS,
    FETCH_SRES_ERROR
} from './sresAction';

const initialState={
    items: [],
    loading: false,
    error: null
};

export default function sresReducer(state = initialState, action){
    switch(action.type){
        case FETCH_SRES_BEGIN:
            return{
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SRES_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                loading: false,
                items: action.payload.sres
            };

        case FETCH_SRES_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload.error,
                items:[]
            };

        default:
            return state;
    }
}