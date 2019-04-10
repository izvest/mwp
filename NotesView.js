import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { noteBank } from './noteBank'
import { styles } from './styles'

export class NotesView extends React.Component {
  static navigationOptions = {
    title: 'Notes App',
  };

  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentWillMount(){
    this.setState({notes: noteBank.getAll})
  }

  static update = () => (this.setState({notes: noteBank.getAll }))

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView style={styles.notes}>
        <Text style={styles.paragraph} >
          {this.state.notes  ? this.state.notes.map(note => <Text>{note.content + "\n"}</Text>) : "No notes found"}
        </Text>
        <Button title="Go add a new note" onPress={() => navigate('Add')} />
      </ScrollView>
    );
  }
}
