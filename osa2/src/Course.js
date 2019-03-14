import React from 'react';

const Course = ({course}) => (
    <div>
        <Header name={course['name']}/>
        <Content parts={course['parts']}/>
        <Total input={course['parts']}/>
    </div>
  )

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

export default Course;