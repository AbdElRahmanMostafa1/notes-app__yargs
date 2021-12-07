const fs = require("fs");

const addNote = (title, body) => {
  const note = loadNote();
  note.push({
    title,
    body,
  });
  saveNote(note);
};

const loadNote = () => {
  try {
    const info = fs.readFileSync("./notes.json").toString();
    return JSON.parse(info);
  } catch (e) {
    return [];
  }
};

// Delete Note
const deleteNote = (title) => {
  let notes = loadNote();
  console.log(notes);
  const haha = notes.filter((note) => note.title !== title);
  saveNote(haha);
};

// Read Note
const readNote = (title) => {
  const notes = loadNote();
  const note = notes.find((note) => note.title === title);
  console.log(note);
};

const listNotes = () => {
  const notes = loadNote();
  notes.forEach((note) => {
    console.log(note.title, note.body);
  });
};

const saveNote = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
module.exports = { addNote, readNote, listNotes, deleteNote };
