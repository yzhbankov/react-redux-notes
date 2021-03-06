import React, {Component, PropTypes} from 'react'
import Masonry from 'react-masonry-component';
import Note from './Note'

import './style/NoteList.less'

export default class NoteList extends Component {


    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <div className="NotesList">
                <h1 className="NotesListTitle">My notes</h1>
                <Masonry
                    options={masonryOptions}>
                    {this.props.notes.map(note =>
                            <Note
                                key={note.id}
                                title={note.title}
                                color={note.color}
                                onDelete={this.props.noteDelete.bind(null, note._id)}
                                text={note.text}>
                            </Note>
                    )}
                </Masonry>
            </div>
        )
    }
}

NoteList.PropTypes = {
    notes: PropTypes.array.isRequired
}