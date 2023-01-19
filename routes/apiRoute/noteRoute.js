const router = require('express').Router();
const { newNote, delNote } = require('../../lib/notesfunc');
const notesList = require('../../db/db.json');

router.get('/notes', (req, res) =>{
    let results = notesList;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if (notesList){
        req.body.id = notesList.length.toString();
    }else {
        {req.body.id = 0}
        res.json(newNote(req.body, notesList));
    }
});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params;
    noteList = await delNote(id, notesList);
    res.json(notesList)
});

module.exports = router;