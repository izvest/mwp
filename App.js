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
    title: 'Menus'
  };

  actualNotes = []

  constructor(props){
    super(props)
    this.actualNotes = props.navigation.getParam('notes')
  }

  addNote(event){
    event.preventDefault()
    let x = [{
      content: newNote
    }]
    if(this.actualNotes){
      if(this.actualNotes.filter(note => note.content === newNote).length > 0){
        Alert.alert(
          'Error',
          'Duplicate note',
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {cancelable: false},
        );
      }else {
        NotesView.setState({
          notes: this.actualNotes.concat(x)
        })
      }
    }else{
      NotesView.setState({
          notes: x
        })
    }
    newNote = ""
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={text => newNote = text} value={newNote}/>
        <Button onPress={e => this.addNote(e)} title="Add new note" color="#849984"/>
        <Button title="Return to homepage" onPress={() => navigate('Notes', {})} />
      </View>
    );
  }
}

class NotesView extends React.Component {
  static navigationOptions = {
    title: 'Welcome to your notes app',
  };

  state = {
    notes: []
  }

  constructor(props) {
    super(props)
    this.state = {
      notes: noteBank
    }
  }

  

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView style={styles.notes}>
        <Text style={styles.paragraph} >
          {this.state.notes.map(note => <Text>{note.content + "\n"}</Text>)}
        </Text>
        <Button title="Go add a new note" onPress={() => navigate('Add', {notes: this.state.notes.bind(this)})} />
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
