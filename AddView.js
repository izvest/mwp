import * as React from 'react';
import { Text, View, TextInput, Button, Alert} from 'react-native';
import { styles } from './styles'
import { noteBank } from './noteBank'
import { NotesView } from './NotesView'

export class AddView extends React.Component{
  static navigationOptions = {
    title: 'Add a note'
  };

  newNote = ""
  st = this.props.navigation.stateSetter

  addNote(event){
    event.preventDefault()
    try{
      let x = [{
        content: this.newNote
      }]
      
      if(noteBank.getAll.filter(note => note.content === this.newNote).length > 0){
        Alert.alert(
          'Error',
          'Note already exists',
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {cancelable: false},
        );
      }
      else {
        noteBank.addNote(this.newNote)
        NotesView.update
      }
      this.newNote = ""
    }
    catch(err){
      Alert.alert(
        'Error',
        err,
        {text: 'OK'},
        {cancelable: false},
      );
      return
    }
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={text => this.newNote = text} value={this.newNote}/>
        <Button onPress={e => this.addNote(e)} title="Add new note" color="#849984"/>
        <Button title="Return to homepage" onPress={() => navigate('Notes')} />
      </View>
    );
  }
}
