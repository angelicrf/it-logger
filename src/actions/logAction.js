import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    Add_LOGS,
    DELETE_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG, SEARCH_LOGS
} from './types';

export const getLogs = () => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch('/api/logs');
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
        const res = await fetch('/api/logs', {
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
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};
export const deleteLog = id => async dispatch => {
    try{
        setLoaoding();
        await fetch(`/api/logs/${id}`, {
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_LOGS,
            payload: id
        })
    }catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        })
    }
};
export const searchLog = text => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch(`/api/logs/?q=${text}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        })
    }
};
export const updateLog = log => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch(`/api/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
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
