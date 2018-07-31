console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log(`Getting note: ${title}`);
    //fetch the notes
    var notes = fetchNotes();
    //notes.filter to only return notes who's title matches the title passed in
    var filteredNotes = notes.filter((note) => note.title === title);
    //going to be zero or 1 note
    //filter will always return an array, return [0]
    return filteredNotes[0];

};

var removeNote = (title) => {
    //fetch the notes
    var notes = fetchNotes();
    //filter out the notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote, //same as addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
};