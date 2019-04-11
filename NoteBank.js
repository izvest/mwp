import * as React from 'react';
import {AsyncStorage} from 'react-native';
//AsyncStorage.setItem(key, {})

const key = "notes"

export class NoteBank extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [{id: 1, content: "Hei"},{id: 2, content: "moi"}]
    }
  }

  add(note:String) {
    let x = {
      content: note
    }
    console.log("NoteBank - Adding new note: "+note)
    let newData = this.state.data.concat(x)
    console.log(newData)
    this.setState({
      data: newData
    })
  }

  getAll = () => {
    console.log("NoteBank - fetching all the notes") 
    return(this.state.data)
  }

  render() {
    const {navigate} = this.props.navigation
    return (() => navigate('Notes', {notes: this}));
  }

/*
  static add = async (note:String) => {
    let newData = this.state.data.concat(note)
    try { await AsyncStorage.setItem(key, newData); } 
    catch (err) { console.log(err) } 
    finally { this.setState({data: newData})}
  };

  static getAll = async () => {
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
