import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export const styles = StyleSheet.create({
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
