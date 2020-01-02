const fs= require('fs')
const chalk = require('chalk')

const readNote = function(title)
{
    const notes= loadNotes()
    const keep= notes.find((notes)=>  notes.title === title
    )
    
    if (keep)
    {
        
        console.log(chalk.green.inverse(keep.title))
        console.log(keep.body)
    }
    else
    {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const listNote = function()
{
    console.log(chalk.yellow.inverse('Your notes:'))
    console.log('\n')
    const notes= loadNotes()
    notes.forEach((note) => {
        console.log(chalk.white.inverse(note.title))
    });
}
const removeNote = function(title)
{
    const notes= loadNotes()
    const keep= notes.filter(function(notes){
        return notes.title !== title
    })
    
    if (notes.length> keep.length)
    {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(keep)
    }
    else
    {
        console.log(chalk.red.inverse('Note not found!'))
    }
}
const addNote = (title, body) =>
{
    const notes= loadNotes()
    const duplicate= notes.filter((notes)=>{
        return notes.title === title
    })
    // const duplicate= notes.filter(function(notes){
    //     return notes.title === title
    // })
    if (duplicate.length!==0){
        console.log(chalk.red.inverse('Duplicate note!'))
    }    
    else
    {
        console.log(chalk.green.inverse('Note Added!'))
        notes.push({
            title:title, body: body
        })
        saveNotes(notes)
    }
}
const getNotes = function(title, body)
{
    const notes=loadNotes()
}

const saveNotes= function(notes)
{
    const data=JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}
const loadNotes= function()
{
    try{
        const buffer= fs.readFileSync('notes.json')
    const dataJSON= buffer.toString()
    return JSON.parse(dataJSON)

    } catch(e)
    {
        return[]
    }
    
}

module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNote:listNote,
    readNote:readNote
}