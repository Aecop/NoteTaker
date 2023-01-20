
const fs = require('fs');
const path = require('path');


function newNotes(body, notesList) {
    const note = body;
    notesList.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), JSON.stringify( {notesList}, null, 2));
    return note;
};

function delNote(id, notes) {
    let notesList = notes.filter(el => {
        if(el.id == id) {
            return false
        }else{
            return true
        }
    });

    let index = 0;
    notesList.forEach(note => {
        note.id = index;
        index += 1;
    });

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify( {notesList}, null, 2));
    return notesList;
}


module.exports = { newNotes, delNote }