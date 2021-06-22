import React, { Component } from 'react'

export class EducationPreview extends Component {
  render() {
    const {schools} = this.props;

    return (
      <div className="education-preview">
        <h3>Education</h3>
        {schools.map(school => {
          return(
            <div className="education-item">
              <p className="degree">{school.degree}</p>
              <p>{school.school}</p>
              <p>{school.location}</p>
              <p><span>{school.from}</span> - <span>{school.to}</span></p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default EducationPreview
