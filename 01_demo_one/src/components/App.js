import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js';

class App extends Component {
  state = {
    exercises,
    // category: 'chest'
    exercise:{}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }
  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  handleExerciseSelected = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id ===id)
    }))
}
  render() {
    // console.log(this.getExercisesByMuscles());
    const exercises = this.getExercisesByMuscles(),
    { category, exercise } = this.state;
    
    return (
      <Fragment>
        <Header />
        <Exercises
        category={category}
          
        exercise={exercise}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
          
        />
        <Footer
          category={category}
          exercise={exercise}
          muscles={muscles}
        onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;
