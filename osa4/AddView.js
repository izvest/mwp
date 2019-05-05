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
  newNote:string = ""

  constructor(props){
    super()
    this.nb = props.navigation.getParam('notes')
  }

  addNote(event){
    event.preventDefault()
    try{
      if(this.nb.getAll().filter(note => note.content === this.newNote).length > 0){
        Alert.alert('Error','Note already exists',{text: 'OK'},{cancelable: false});
      }
      else {
        this.nb.add(this.newNote)
      }
    }
    catch(err){ console.log("AddView.addNote - Error: "+err) }
    finally{ this.newNote = "" }
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={text => this.newNote = text} value={this.newNote}/>
        <Text>"\n\n\n"</Text>
        <Button onPress={e => this.addNote(e)} title="Add new note" height/>
        <Button title="Return to homepage" onPress={() => navigate('Notes', {notes: this.nb})} color="gray" />
      </View>
    );
  }
}
