import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    Add_LOGS,
    DELETE_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG, SEARCH_LOGS
} from '../../src/actions/types';

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
        case DELETE_LOGS:
            return{
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            };
        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            };
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            };
        case  SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case SET_LOADING :
            return {
                ...state,
                loading: true
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
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
