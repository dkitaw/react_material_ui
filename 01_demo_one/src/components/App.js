import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js';

class App extends Component {
  state = {
    exercises,
    category: 'chest'
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
  render() {
    // console.log(this.getExercisesByMuscles());
    const exercises = this.getExercisesByMuscles(),
    { category } = this.state;
    
    return (
      <Fragment>
        <Header />
        <Exercises
        category={category}
          
        exercises={this.getExercisesByMuscles()}
        />
        <Footer
          category={category}
          muscles={muscles}
        onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;
