import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as NoteActions from '../actions/NotesActions'

import NoteEditor from '../component/NoteEditor.js'
import NoteList from '../component/NoteList.js'
import '../component/style/App.less'

class App extends Component {
    componentWillMount() {
        this.props.getNotesAction.getNotes();
    }

    render() {
        return (<div>
                <div className='AppTitle'>Notes Application based on React/Redux technologies</div>
                <NoteEditor addNote={this.props.getNotesAction.addNote}/>
                <NoteList notes={this.props.notes} isLoading={this.props.isLoading}
                          noteDelete={this.props.getNotesAction.deleteNote}/>
            </div>
        )
    }
}

function stateToComponent(state) {
    return {
        notes: state.notes,
        isLoading: state.isLoading
    }
}

function dispatchToComponent(dispatch) {
    return {
        getNotesAction: bindActionCreators(NoteActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(App);