import * as React from 'react';
import {AsyncStorage} from 'react-native';
//AsyncStorage.setItem(key, {})

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
    let newData = this.state.data.concat(note)
    try { await AsyncStorage.setItem(key, newData); } 
    catch (err) { console.log(err) } 
    finally { this.setState({data: newData})}
  };

  getAll = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      if (items !== null) {
        // We have data!!
        console.log(items);
        return [items]
      }
      else{return ["empty"]}
    } 
    catch (err) { console.log(err) } 
  };*/
}
