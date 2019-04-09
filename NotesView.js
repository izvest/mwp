import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { noteBank } from './noteBank'
import { styles } from './styles'

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
