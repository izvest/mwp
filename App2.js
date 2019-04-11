import * as React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {AddView} from './AddView'
import {NotesView} from './NotesView'
import {NoteBank} from './NoteBank'

const AppNavigator = createStackNavigator(
  {
    Bank: NoteBank,
    Notes: NotesView,
    Add: AddView
  },
  {initialRouteName: "Bank"}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}
