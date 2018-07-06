import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
    DoctorsList:[]
    }
  }

  componentWillMount(){
    fetch(`http://localhost:4001/getDoctors`)
      .then(response => response.json())
      .then(response => {
        const DoctorsList = [...this.state.DoctorsList, response];
        this.setState({DoctorsList})
      })
      
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  fun = (parameter) => {
    fetch(`http://localhost:3001/getData=${parameter}`)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => this.setState(DomainList => ({
        DomainList: [...this.state.DomainList, response] 
      })
      )) 
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.DoctorsList,"hi");
    return (
      <div>
        <h1>"Doctors-list website"</h1>
        <span>
          <input type="submit" value="Dentist" onClick={this.fun("Dentist")} ></input>
          <input type="submit" value="Dermatologist" onClick={this.fun("Dermatologist")} ></input>
          <input type="submit" value="Physician" onClick={this.fun("Physician")} ></input>
          <input type="submit" value="Surgeon" onClick={this.fun("Surgeon")} ></input>
        </span>
        <div>
      </div>
      </div>
    );
  }
}

export default App;
