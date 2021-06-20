import React, { Component } from 'react'

export class EducationPreview extends Component {
  render() {
    return (
      <div className="education-preview">
        <h3>Education</h3>
        <div className="education-container">
          <p>YOUR DEGREE</p>
          <p>New York University</p>
          <p><span>2017</span> - <span>2020</span></p>
        </div>
        <div className="education-container">
          <p>YOUR DEGREE</p>
          <p>Harvard University</p>
          <p><span>2021</span> - <span>2022</span></p>
        </div>
      </div>
    )
  }
}

export default EducationPreview
