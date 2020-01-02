
const chalk = require('chalk');
const yargs = require('yargs');
const notes= require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command: "add",
     describe: 'Add a new note', 
     builder:{
         title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
         },
         body:
         {
            describe: 'Note body',
                demandOption: true,
                type: 'string',
         }

     },
     handler(argv)
    {
    
        notes.addNote(argv.title, argv.body)

    
    }
    
})
yargs.command({
    command: "remove",
     describe: 'Remove a note', 
     builder:{
         title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
         },
        

     },
     handler(argv)
    {
       
        notes.removeNote(argv.title)

    
    }
    
})
yargs.command({
    command: "list",
     describe: 'List all note', 
     
     handler(argv)
    {
    
        notes.listNote()

    
    }
    
})
yargs.command({
    command: "read",
     describe: 'Read a note', 
     builder:{
         title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
         },
        

     },
     handler(argv)
    {
       
        notes.readNote(argv.title)

    
    }
    
})
yargs.parse()
// yargs.command({
//     command: "remove", describe: 'Remove a new note', handler: function()
//     {
//         console.log(chalk.green.bold.bgWhite('Success! Note removed'));
//     }
    
// })
// yargs.command({
//     command: "list", describe: 'List all note', handler: function()
//     {
//         console.log(chalk.yellow.bold.bgWhite('Here is the list'));
//     }
    
// })
// yargs.command({
//     command: "read", describe: 'Read all note', handler: function()
//     {
//         console.log(chalk.yellow.bold.bgWhite(' Readlist'));
//     }
    
// })


// const command = (process.argv[2])

// while (command !== 'exit')

// {

//     if (command === "add")

//     {

//         console.log(chalk.green.bold.bgWhite('Success! Node added'));

//     }

//     if (command === "remove")

//     {

//         console.log(chalk.red.bold.bgWhite('Success! Node removed'));

//     }

//     else

//     {

//         console.log(chalk.yellow.bold.bgWhite('Error'));   

//     }

// }
