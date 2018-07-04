import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
    DoctorsList:[]
    }
  }
  getDoctors () {
    fetch(`http://localhost:4000/getDoctors`)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => this.setState(DoctorsList => ({
        DoctorsList: [...this.state.DoctorsList, response]
      })
      ))
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>"Doctors-list website"</h1>
      </div>
    );
  }
}

export default App;
