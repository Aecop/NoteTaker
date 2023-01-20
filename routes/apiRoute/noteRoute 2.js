const router = require('express').Router();
const { newNotes, delNote } = require('../../lib/notesfunc');
let { notesList } = require('../../db/db');

router.get('/notes', (req, res) =>{
    let results = notesList;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if (notesList){
        req.body.id = notesList.length.toString();
    }else
        {req.body.id = 0}
        res.json(newNotes(req.body, notesList));

});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notesList = await delNote(id, notesList);
    res.json(notesList)
});

module.exports = router;