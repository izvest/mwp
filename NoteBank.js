import * as React from 'react';
import {AsyncStorage} from 'react-native';

const key = "notes"

export class NoteBank extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [{id: 1, content: "Hei"},{id: 2, content: "And"}]
    }
  }

  add(note:String) {
    let newNote = {
      id: Date.now(),
      content: note
    }
    console.log("NoteBank.add - Adding new note: "+note)
    this.setState(prevState => ({
      data: prevState.data.concat(newNote)
    }))
  }

  getAll = () => {
    console.log("NoteBank.getAll - fetching all the notes")
    console.log(this.state.data)
    return(this.state.data)
  }

  render() {
    this.props.navigation.navigate('Notes', {notes: this})
    return null
  }

/*
  add = async (note:String) => {
    let current = await this.getAll
    var newNote = {id: Date.now(), content: note}
    var newObject

    if(current === null){ newObject = {notes: [newNote]} }
    else{
      let obj = JSON.parse(current)
      newObject = obj.notes.concat(note)
      let newThing = JSON.stringify(newObject)
    }
    AsyncStorage.setItem('notes', newObject)
  };

  getAll = async () => {
    try {
      const notes = await AsyncStorage.getItem('notes')
      let obj = JSON.parse(notes)
      return obj
    } 
    catch (err) { console.log(err) } 
  };*/
}
