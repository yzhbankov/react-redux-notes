import {
    GET_NOTES_REQUEST,
    GET_NOTES_SUCCESS,
    GET_NOTES_FAILURE
} from '../constants/Constants'

import api from '../api/NotesApi'

export function getNotes() {
    return (dispatch) => {
        dispatch({
            type: GET_NOTES_REQUEST
        });

        api.listNotes()
            .then(data => {
                dispatch({
                    type: GET_NOTES_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_NOTES_FAILURE,
                    payload: err,
                    error: true
                })
            })
    }
}