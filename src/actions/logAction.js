import {GET_LOGS, SET_LOADING, LOGS_ERROR, Add_LOGS} from './types';

export const getLogs = () => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        })
    }
};
export const addLog = (log) => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch('/logs', {
            method: 'POST',
            body:JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: Add_LOGS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        })
    }
};
export const setLoaoding = () => {
    return {
        type: SET_LOADING
    }
};
