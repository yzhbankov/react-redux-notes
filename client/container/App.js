import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as NoteActions from '../actions/NotesActions'

import NoteEditor from '../component/NoteEditor.js'
import NoteList from '../component/NoteList.js'

class App extends Component {
    componentWillMount() {
        this.props.getNotes.getNotes()
    }

    render() {
        return (<div>
                <NoteEditor />
                <NoteList notes={this.props.notes} isLoading={this.props.isLoading}/>
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
        getNotes: bindActionCreators(NoteActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(App);