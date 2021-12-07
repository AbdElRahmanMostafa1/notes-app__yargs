// Modules (add Funtionality to the program)
// 1) Core module
// 2)

// import { fs } from "fs";
// const fs = fs.key;
// // const fs = require("fs");
// const data = require("./data");
// fs.writeFileSync("notes.pdf", "Hello");

// console.log(fs.readFileSync("./notes.txt").toString());

// fs.appendFileSync("./notes.txt", " \nHAHA Appended!");
// console.log(data.fName);
// console.log(data.addTwo(5, 7));

// const validator = require("validator");
// import fetch from "node-fetch";
// import chalk from "chalk";
// const chalk = require("chalk");

// console.log(validator.isEmail("abdo@.com") === true);

// validator.isEmail("abdo@.com") === true
//   ? console.log(chalk.blue("Yes Email"))
//   : console.log(chalk.red("Not An Email"));
const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Add Notes",
  builder: {
    title: {
      decribe: "Title of NOte",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the noteeeeee",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// DELETE
yargs.command({
  command: "delete",
  describe: "Delete Note",
  builder: {
    title: {
      describe: "Title to delete",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.deleteNote(argv.title);
    // console.log(argv.title);
  },
});

// READ
yargs.command({
  command: "read",
  describe: "Read Note",
  builder: {
    title: {
      describe: "Title tO Read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// LIST
yargs.command({
  command: "listt",
  describe: "List Note",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "*",
  describe: "For All",
  handler() {
    console.log(`Command Not Found!`);
  },
});

// if (
//   process.argv[2] !== `add` ||
//   process.argv[2] !== `delete` ||
//   process.argv[2] !== `read` ||
//   process.argv[2] !== `list`
// ) {
//   console.log(process.argv);
//   return console.log(`Command Not Found!`);
// } else {
//   return yargs.parse();
// }

// console.log(yargs.argv);
yargs.parse();
