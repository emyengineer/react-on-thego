import React, { Component } from 'react';
import Course from './Course.js';

class ReportDetails extends React.Component {
	
	 state = {
   
  }

  componentDidMount() {
  }

  render() {
    let {classes, onRemove, onAdd} = this.props
    console.log(classes)
    return (
      <div >
       <p className="sec-detail-title"> Classes</p>     
          <ol className="rows-grid">
            {classes.map((course, index) => (
              <li  key = {index}>
              <Course selectedCourse = {course} index= {index} onRemove= {onRemove} />
              </li>
              ))
            }
          </ol>
          <button type="button" className = "course-add-row" 
              onClick = {(event) => onAdd(event)}
          >New Line</button>
      </div>
    );
  }

}

export default ReportDetails ;
