import * as React from 'react';
import { Text, View, TextInput, Button, Alert} from 'react-native';
import { styles } from './styles'
import { NoteBank } from './NoteBank'
import { NotesView } from './NotesView'

export class AddView extends React.Component{
  static navigationOptions = {
    title: 'Add a note'
  };

  nb:NoteBank

  constructor(props){
    super()
    this.nb = props.navigation.getParam('notes')
  }

  newNote:string = ""

  addNote(event){
    event.preventDefault()
    try{
      if(this.nb.getAll().filter(note => note.content === this.newNote).length > 0){
        Alert.alert('Error','Note already exists',{text: 'OK'},{cancelable: false});
      }
      else {
        this.nb.add(this.newNote)
        console.log("AddView - New note added: "+this.newNote)
      }
      this.newNote = ""
    }
    catch(err){
      console.log("AddView - "+err)
    }
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>{this.nb.getAll}</Text>
        <TextInput style={styles.textInput} onChangeText={text => this.newNote = text} value={this.newNote}/>
        <Button onPress={e => this.addNote(e)} title="Add new note" color="#849984"/>
        <Button title="Return to homepage" onPress={() => navigate('Notes', {notes: this.nb})} />
      </View>
    );
  }
}
