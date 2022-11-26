const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
  //   const notes = require("./db.json");
  const notes = await getNotes();
  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);

  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.bgGreen("Note was added"));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
  const notes = await getNotes();
  console.log(chalk.bgBlue("Here is the list of Notes"));
  notes.forEach((note) => {
    console.log(chalk.blue(`${note.id} ${note.title}`));
  });
}

async function removeNote(id) {
  const notes = await getNotes();
  const note = notes.filter((note) => note.id !== id.toString());
  await fs.writeFile(notesPath, JSON.stringify(note));
}

module.exports = {
  addNote,
  printNotes,
  removeNote,
};

// npm i chalk@4.1.2 - для красоты терминала