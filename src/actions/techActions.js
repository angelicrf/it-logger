import {GET_TECHS, ADD_TECHS, DELETE_TECHS, SET_LOADING, TECHS_ERROR} from "./types";

export const getTechs = () => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        })
    }
};
export const addTechs = tech => async dispatch => {
    try{
        setLoaoding();
        const res = await fetch('/techs',{
            method: 'POST',
            body:JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
        }});
        const data = await res.json();
        dispatch({
            type: ADD_TECHS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        })
    }
};

export const deleteTechs = id => async dispatch => {
    try{
        setLoaoding();
        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_TECHS,
            payload: id
        })
    }catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        })
    }
};



export const setLoaoding = () => {
    return {
        type: SET_LOADING
    }
};
