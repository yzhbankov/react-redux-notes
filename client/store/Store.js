import {createStore, applyMiddleware } from 'redux'
import notesReducer from '../reducer/NotesReducer.js'

export default function appStore(initialState) {

    const store = createStore(notesReducer, initialState);

    return store;
}