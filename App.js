import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Button, Alert} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const noteBank = [
  {
    id: 1,
    content: 'Eka viesti',
  },
  {
    id: 2,
    content: 'Toinen viesti',
  },
  {
    id: 3,
    content: 'Kolmas viesti',
  }
]


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: noteBank
    }
  }

  newNote = ""

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.notes}>
          <Text style={styles.paragraph} >
          {this.state.notes.map(note => <Text>{note.content + "\n"}</Text>)}
          </Text>
        </ScrollView>
        <TextInput style={styles.textInput} onChangeText={text => this.newNote = text} value={this.newNote}/>
        <Button style={styles.button} onPress={e => this.addNote(e)} title="Add new note" color="#849984"/>
      </View>
    );
  }

  addNote(event){
    event.preventDefault()
    let x = [{
      content: this.newNote
    }]
    if(this.state.notes.filter(note => note.content === this.newNote).length > 0){
      Alert.alert(
      'Error',
      'Duplicate note',
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {cancelable: false},
    );
    }else {
      this.setState({
        notes: this.state.notes.concat(x)
      })
    }
    this.newNote = ""
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  notes:{
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#151515',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#999'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2
  }
});
