console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);
//test
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created!');
        notes.logNote(note);
        
    } else {
        console.log('Note title taken...');
    }

} else if (command === 'list') {
    notes.getAll();

} else if (command === 'read') {
    //return value
    var note = notes.getNote(argv.title);
    //print some things
    if(note !== 0) {
        notes.logNote(note);
    } else {
        console.log('Note not found...');
    }
    
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized...');
}