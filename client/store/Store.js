import {createStore, applyMiddleware} from 'redux'
import notesReducer from '../reducer/NotesReducer.js'
import thunk from 'redux-thunk'

export default function appStore(initialState) {

    const store = createStore(notesReducer, initialState, applyMiddleware(thunk));

    return store;
}