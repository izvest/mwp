import React from 'react';
import personsService from './services/persons'

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
    personsService.getAll().then(response => {
      this.setState({
        persons: response.data,
        newName: '',
        newNumber: ''
      })
    }).catch(error => "fetching data failed: "+error)
  )

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  deleteEntry = (event, idNum) => {
    event.preventDefault()
    if(window.confirm("You sure you want to delete this, m8?")){
      personsService.del(idNum).then(response => {
        console.log(response)
        this.setState({
          persons: this.state.persons.filter(p => p.id !== idNum)
        })
      }).catch(error => "delete failed: "+error)
    }
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: Math.round(Math.random()*10000)
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
       personsService.create(nameObject)
          .then(response => {
            console.log(response)
            this.setState({
              persons: this.state.persons.concat(nameObject)
            })
          }).catch(error => "add failed: "+error)
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

const List = ({caller}) => (
  <div>
    <h2>Numerot</h2>
    <table>
      <tbody>
        {caller.state.persons.map(n => 
          <tr>
            <td>{n.name}</td>
            <td>{n.number} </td>
            <td><form onSubmit={event => caller.deleteEntry(event, n.id)}><Button type="submit" text="Poista"/></form></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

const Form = ({caller,submit}) => (
  <form onSubmit={caller.addName}>
      <Inputs caller={caller}/>
      <Button type="submit" text="Lähetä"/>
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

const Button = ({type, text}) => (
  <div>
    <button type={type}>{text}</button>
  </div>
)

export default Puhelinluettelo