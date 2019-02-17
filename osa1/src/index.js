import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Superadvanced web and mobile programming'
    const part1 = 'Basics of React'
    const exercises1 = 8
    const part2 = 'Using props'
    const exercises2 = 10
    const part3 = 'Component states'
    const exercises3 = 12
  
    return (
      <div>
        <Header name={course}/>
        <Content first={[part1, exercises1]} second={[part2, exercises2]} third={[part3, exercises3]}/>
        <Total count={exercises1+exercises2+exercises3}/>
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
          <Part name={props.first[0]} count={props.first[1]}/>
          <Part name={props.second[0]} count={props.second[1]}/>
          <Part name={props.third[0]} count={props.third[1]}/>
    </div>
)

  const Part = (props) => (
    <div>
        <p>{props.name} {props.count}</p>
    </div>
)

const Total = (props) => (
    <div>
        <p>Total {props.count} exercises</p>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
