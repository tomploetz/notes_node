// var obj = {
//     name: 'Tom'
// };
// var stringObj = JSON.stringify(obj); //returns JSON stringified object
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Tom", "age": "23"}';
// var person = JSON.parse(personString);

// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note.title);