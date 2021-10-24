const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note.')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: () => {
        console.log('Listing the note.')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading the note.')
    }
})

yargs.parse()