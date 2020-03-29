import {GET_LOGS, SET_LOADING, LOGS_ERROR, Add_LOGS} from '../../src/actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            };
        case Add_LOGS :
            return{
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case SET_LOADING :
            return {
                ...state,
                loading: true
            };
        case LOGS_ERROR:
            console.log(action.payload);
            return{
                ...state,
                error: action.payload
            };
        default: return state;
    }
}
