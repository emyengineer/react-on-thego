import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReportHeader from './components/ReportHeader.js';
import ReportDetails from './components/ReportDetails.js';

class App extends React.Component {

  state = {
    classes: [
              {
              course : "English",
              grade: "A",
              comments: "English is Awesome"
            },
            {
              course : "French",
              grade: "B",
              comments: "French is elegent"
            },  
              {
                course : "Italiano",
              grade: "C",
              comments: "I love Pasta"
            },
            {
              course : "French",
              grade: "F",
              comments: "Le Francais et beau"
            },
            {
              course : "English",
              grade: "D",
              comments: "Many people speak English"
            }    
    ]
  }

  componentDidMount() {
  }

 onRemove = (selectedCourse, event, index) => {
    this.setState((state) => ({
      classes : state.classes.filter((_, i) => i !== index)
    }))
 }
 onAdd = (event) => {
  let newCourseRow = {
              course : "English",
              grade: "D",
              comments: "Many people speak English"
            } 
  this.setState((state) => ({
    classes: state.classes.concat([newCourseRow])
  }))
 }

  handleSubmit(event) {
    alert('A Submit was made: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
       <form onSubmit={this.handleSubmit}>
         <ReportHeader/>

         <ReportDetails classes= {this.state.classes}  onRemove= {this.onRemove}
                         onAdd = {this.onAdd} />
         <input type="submit" className="save-btn"  value="Save"   />
       </form>
    );
  }
}

export default App;
