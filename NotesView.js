import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { NoteBank } from './noteBank'
import { styles } from './styles'

export class NotesView extends React.Component {
  static navigationOptions = {
    title: 'Notes App',
  };

  nb:NoteBank

  constructor(props) {
    super(props)
    this.nb = props.navigation.getParam('notes')
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView style={styles.notes}>
        <Text style={styles.paragraph} >
          {this.nb ? "" : "Notes object null\n"}
          {this.nb.getAll ? this.nb.getAll.map(note => <Text>{note.content + "\n"}</Text>) : "Notes array is null"}
        </Text>
        <Button title="Go add a new note" onPress={() => navigate('Add', {notes: this.nb})} />
      </ScrollView>
    );
  }
}
