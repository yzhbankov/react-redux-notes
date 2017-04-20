import {
    GET_NOTES_REQUEST,
    GET_NOTES_SUCCESS,
    GET_NOTES_FAILURE
} from '../constants/Constants'

const initialState = {
    notes: [],
    isLoading: false
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES_REQUEST:
            return Object.assign({}, state, {isLoading: true})
        case GET_NOTES_SUCCESS:
            return Object.assign({}, state, {notes: action.payload.data, isLoading: false})
        case GET_NOTES_FAILURE:
            return Object.assign({}, state, {error: action.payload, isLoading: false})
        default:
            return state
    }
}