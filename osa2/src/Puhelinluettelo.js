import React from 'react';
import axios from 'axios';

class Puhelinluettelo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
  }

  componentDidMount = () => (
    this.fetchData()
  )

  fetchData = () => (
    axios.get('http://localhost:3001/persons').then(response => {
      this.setState({
        persons: response.data,
        newName: '',
        newNumber: ''
      })
    })
  )

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length+1
    }

    if (nameObject.name === '' || nameObject.number === ''){alert("every contact needs both name and number")}
    else{
      if (this.state.persons.map(e => e.name).indexOf(nameObject.name) !== -1){
        alert("person already on the list")
        this.setState({
          newName: '',
          newNumber: ''
        })
      }else{
        axios.post('http://localhost:3001/persons', nameObject)
          .then(response => {
            console.log(response)
            this.fetchData()
          })
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Form caller={this}/>
        <List caller={this}/>
      </div>
    )
  }
}

const Delete = (id) => {
  if(window.confirm("You sure you want to delete this, m8?")){
    axios.delete('http://localhost:3001/persons'+id).then(response => {
      console.log("contact deleted")
    })
  }
}

const List = ({caller}) => (
  <div>
    <h2>Numerot</h2>
    <table><tbody>
      {caller.state.persons.map(n => 
        <tr>
          <td>{n.name}</td>
          <td>{n.number} </td>
          <td><button onClick={Delete(n.id)}>poista</button></td>
        </tr>
      )}
    </tbody></table>
  </div>
)

const Form = ({caller,submit}) => (
  <form onSubmit={caller.addName}>
      <Inputs caller={caller}/>
      <Button type="submit"/>
    </form>
)

const Inputs = ({caller}) => (
  <div>
    <div>
      nimi: <input 
        value={caller.state.newName}
        onChange={caller.handleNameChange}/>
    </div>
    <div>
      numero: <input 
        value={caller.state.newNumber}
        onChange={caller.handleNumberChange}/>
    </div>
  </div>
)

const Button = (type) => (
  <div>
    <button type={type}>lisää</button>
  </div>
)

export default Puhelinluettelo