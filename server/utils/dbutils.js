import mongoose from 'mongoose'
import '../models/noteModel.js'

const Note = mongoose.model('Note');

export function setUpConnect() {
    mongoose.connect('mongodb://localhost:27017/notes');
}

export function listNotes() {
    return Note.find({});
}

export function addNote(data) {
    const note = Note({
        title: data.title,
        text: data.text,
        color: data.color,
        date: new Date()
    });
    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove()
}