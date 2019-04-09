import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Button, Alert} from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

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

var newNote = ""

class AddView extends React.Component{
  static navigationOptions = {
    title: 'Add a note'
  };

  addNote(event){
    event.preventDefault()
    try{
      let x = [{
        content: newNote
      }]
      
      if(NotesView.getState().filter(note => note.content === newNote).length > 0){
        Alert.alert(
          'Error',
          'Note already exists',
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {cancelable: false},
        );
      }
      else {
        NotesView.stateSetter({
          notes: NotesView.getState.concat(x)
        })
      }
      newNote = ""
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
        <TextInput style={styles.textInput} onChangeText={text => newNote = text} value={newNote}/>
        <Button onPress={e => this.addNote(e)} title="Add new note" color="#849984"/>
        <Button title="Return to homepage" onPress={() => navigate('Notes')} />
      </View>
    );
  }
}

class NotesView extends React.Component {
  static navigationOptions = {
    title: 'Notes App',
  };

  constructor(props) {
    super(props)
    this.state = {
      notes: noteBank
    }
  }

  static getState = () => (this.state.notes.bind(this))
  static stateSetter = (p) => (this.setState(p).bind(this))

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView style={styles.notes}>
        <Text style={styles.paragraph} >
          {this.state.notes.map(note => <Text>{note.content + "\n"}</Text>)}
        </Text>
        <Button title="Go add a new note" onPress={() => navigate('Add')} />
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Notes: NotesView,
    Add: AddView
  },
  {initialRouteName: "Notes"}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
    borderWidth: 2,
    color: '#fff'
  }
});
