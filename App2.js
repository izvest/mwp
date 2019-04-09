import * as React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {AddView} from './AddView'
import {NotesView} from './NotesView'

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
