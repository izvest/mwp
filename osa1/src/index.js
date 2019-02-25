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

  positiivinen = () => {
    this.setState({
      pos: this.state.pos + 1,
      total: this.state.total + 1
    })
  }

  negatiivinen = () => {
    this.setState({
      neg: this.state.neg + 1,
      total: this.state.total + 1
    })
  }

  neutraali = () => {
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
          <Button handleClick={this.positiivinen} text="Positiivnen"/>
          <Button handleClick={this.neutraali} text="Neutraali"/>
          <Button handleClick={this.negatiivinen} text="Negatiivinen"/>
          <br></br>
          <Statistics pos={this.state.pos} neg={this.state.neg} total={this.state.total} neut={this.state.neut}/>
        </div>
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ pos, neg, total, neut }) => {
  if(total == 0){
    return(
      <div>
        <h1>Stats</h1>
        <p>Palatetta ei ole annettu vielä</p>
      </div>
    )
  }
  return(
  <div>
    <h1>Stats</h1>
    <table>
      <Statistic name="positiivisia" data={pos}/>
      <Statistic name="neutraaleja" data={neut}/>
      <Statistic name="negatiivisia" data={neg}/>
      <br></br>
      <Statistic name="total feedback given" data={total}/>
      <Statistic name="keskiarvo" data={Math.round(100*(pos-neg)/total)/100}/>
      <Statistic name="positiivisia" data={Math.round(100*pos/total)+"%"}/>
    </table>
  </div>
)}

const Statistic = ({ name, data }) => (
  <tr>
    <td>{name}:</td><td>{data}</td>
  </tr>
)

ReactDOM.render(<Feed />, document.getElementById('feedback'));