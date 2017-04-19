import express from 'express'
import path from 'path'
import * as db from '../utils/dbutils.js'

const router = express.Router();

router.get('/', (req, res)=> {
    res.send('Hello');
});

router
    .get('/notes', (req, res)=> {
        db.listNotes()
            .then(data=> {
                res.send(data)
            })
    })
    .post('/notes', (req, res)=> {
        db.addNote(req.body)
            .then(data=> {
                res.send(data)
            })
    })
    .delete('/notes/:id', (req, res)=> {
        db.deleteNote(req.params.id)
            .then(data=> {
                res.send(data)
            })
    });

export default router;