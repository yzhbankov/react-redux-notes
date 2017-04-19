import axios from 'axios'

export default {
    listNotes(){
        return axios.get('http://localhost:8000/notes');
    },
    addNote(data){
        return axios.post('http://localhost:8000/notes', data);
    },
    deleteNote(id){
        return axios.delete('http://localhost:8000/notes/' + id)
    }
}