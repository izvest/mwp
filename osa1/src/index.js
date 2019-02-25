import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  
    return (
      <div>
        <Header name={course['name']}/>
        <Content parts={course['parts']}/>
        <Total input={course['parts']}/>
      </div>
    )
  }

  const Header = (props) => (
      <div>
          <h1>{props.name}</h1>
      </div>
  )

  const Content = (props) => (
    <div>
          <Part input={props.parts[0]}/>
          <Part input={props.parts[1]}/>
          <Part input={props.parts[2]}/>
    </div>
)

  const Part = (props) => (
    <div>
        <p>{props.input.name} {props.input.exercises}</p>
    </div>
)

const Total = (props) => {
    let total = 0;
    for (let i = 0; i < props.input.length; i++){
      total += props.input[i].exercises;
    }
    return(
    <div>
        <p>Total {total} exercises</p>
    </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: 0,
      neg: 0,
      neut: 0,
      total: 0
    }
  }

  klikPos = () => {
    this.setState({
      pos: this.state.pos + 1,
      total: this.state.total + 1
    })
  }

  klikNeg = () => {
    this.setState({
      neg: this.state.neg + 1,
      total: this.state.total + 1
    })
  }

  klikNeut = () => {
    this.setState({
      neut: this.state.neut + 1,
      total: this.state.total + 1
    })
  }

  render() {
    
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <button onClick={this.klikPos}>Posiiivinen</button>
          <button onClick={this.klikNeut}>Neutraali</button>
          <button onClick={this.klikNeg}>Negatiivinen</button>
          <br></br>
          <p>Positiivisia: {this.state.pos}</p>
          <p>Neutraaleja: {this.state.neut}</p>
          <p>Negatiivisia: {this.state.neg}</p>
          <br></br>
          <p>Total times feedback given: {this.state.total}</p>
          <p>Keskiarvo: {Math.round(100*(this.state.pos-this.state.neg)/this.state.total)/100}</p>
          <p>Positiivisia: {Math.round(100*this.state.pos/this.state.total)} %</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Feed />, document.getElementById('feedback'));