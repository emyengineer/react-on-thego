import React, { Component } from 'react';

class ReportHeader extends React.Component {
	
	 state = {
   
  }

  componentDidMount() {
  }

  onDateChanged = (value, eventTarget) => {
    console.log(value)
  }

  render() {
    return (
      <div className="report-header">
            <h1 className="title-style">Fill out Report Card</h1>

            <div className ="header-content">
                <label htmlFor ="reportDate" className ="lblDate-style">Date</label>
                <input className="date-style" type="date" id="reportDate" 
                      name="reportCardDate" value="2018-09-19" min="2018-01-01" 
                      max="2018-12-31" 
                      onChange ={(event) => this.onDateChanged(event.target.value)}/>
                <input className ="name-style" type ="text" name ="name" placeholder= "Name"/>
                <input className ="teacher-style"  type ="text" name ="teacherName" placeholder= "Teacher Name"/>
            </div>
      </div>
    );
  }

}

export default ReportHeader ;
