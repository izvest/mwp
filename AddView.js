import * as React from 'react';
import { Text, View, TextInput, Button, Alert} from 'react-native';
import { styles } from './styles'
import { noteBank } from './noteBank'
import { NotesView } from './NotesView'

export class AddView extends React.Component{
  static navigationOptions = {
    title: 'Add a note'
  };

  nb:NoteBank

  constructor(props){
    super()
    this.nb = props.navigation.getParam('notes')
    let newNote = ""
  }

  addNote(event){
    event.preventDefault()
    console.log("here")
    try{
      console.log("here2")
      if(this.nb.getAll.filter(note => note.content === this.newNote).length > 0){
        console.log("here3")
        Alert.alert('Error','Note already exists',{text: 'OK'},{cancelable: false});
      }
      else {
        console.log("here4")
        this.nb.add(this.newNote)
        console.log("here5")
      }
      this.newNote = ""
    }
    catch(err){
      Alert.alert('Error',err,{text: 'OK'},{cancelable: false});
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
