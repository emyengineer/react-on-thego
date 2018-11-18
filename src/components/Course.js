import React, { Component } from 'react';

class Course extends React.Component {
	
	 state = {
   
  }

  componentDidMount() {
  }

onCourseChanged = (selectedCourse, event) => {
  event.preventDefault();
  console.log('course changed ', selectedCourse)
}

  render() {
    const {selectedCourse, onRemove, index} = this.props
    return (
      <div className="course-rows">
         <div className="course-style">
                        <select className="course-row" value={selectedCourse.course} 
                          onChange = {(event) => this.onCourseChanged(selectedCourse, event)}>
                          <option value="select" disabled>Select Course...</option>
                          <option value="English">English Subject</option>
                          <option value="French"> French Subject</option>
                          <option value="Italiano"> Italiano Subject</option>
                          <option value="none">None</option>
                        </select>
        </div>
        <div className="grade-style ">
                        <select className="course-row">
                          <option value="select" disabled>Select Grade...</option>
                          <option value="A">Excellent</option>
                          <option value="B"> Very Good</option>
                          <option value="C"> Good</option>
                          <option value="D">Pass</option>
                          <option value="E">Poor</option>
                          <option value="F">Fail</option>
                        </select>
        </div>
        <input className="comments-style course-row" type="text" name="commentsTxt" placeholder= "Comments"/>
        
        <i className="fa fa-close fa-2x " onClick = {(event) => onRemove(selectedCourse, event, index)}></i>
      </div>
    );
  }

}

export default Course ;
