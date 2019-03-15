import React from 'react';

class Puhelinluettelo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '0000'}
      ],
      newName: '',
      newNumber: ''
    }
  }

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
      number: this.state.newNumber
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
        const contacts = this.state.persons.concat(nameObject)
    
        this.setState({
          persons: contacts,
          newName: '',
          newNumber: ''
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

const List = ({caller}) => (
  <div>
    <h2>Numerot</h2>
    <ul>
      {caller.state.persons.map(n => <li>{n.name}  {n.number}</li>)}
    </ul>
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