import {AsyncStorage} from 'react-native';

const key = "notes"

export class noteBank {
  constructor(){
    AsyncStorage.setItem(key, {})
    this.state = {
      data: []
    }
  }

  static add = async (note:String) => {
    let newData = this.state.data.concat(note)
    try { await AsyncStorage.setItem(key, newData); } 
    catch (err) { console.log(err) } 
    finally { this.setState({data: newData})}
  };

  static getAll = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      if (items !== null) {
        // We have data!!
        console.log(items);
        return [items]
      }
      else{return ["empty"]}
    } 
    catch (err) { console.log(err) } 
  };
}
