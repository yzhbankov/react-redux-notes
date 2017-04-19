import React, {Component, PropTypes} from 'react'

import './style/Note.less'

export default class Note extends Component {
    render() {
        const noteStyle = {
            backgroundColor: this.props.color
        };
        return (
            <div style={noteStyle} className="Note">
                <div onClick={this.props.onDelete}><a href="" className="NoteBtn">X</a></div>
                <div className="NoteTitle">{this.props.title}</div>
                <div className="NoteText">{this.props.text}</div>
            </div>
        )
    }
}