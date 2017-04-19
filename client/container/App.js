import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NoteEditor from '../component/NoteEditor.js'
import NoteList from '../component/NoteList.js'

class App extends Component {
    render() {
        return (<div>
                <NoteEditor />
                <NoteList />
            </div>
        )
    }
}

export default App;