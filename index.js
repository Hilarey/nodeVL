const yargs = require("yargs");
const { addNote, printNotes, removeNote } = require("./notes-controller");

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demanOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});
yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    const notes = await printNotes();
    console.log("notes :>> ", notes);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  handler({ id }) {
    removeNote(id);
  },
});

yargs.parse();
