import React, { Component } from 'react'

export class ExperiencePreview extends Component {
  render() {
    return (
      <div className="experience-preview">
        <h3>Experience</h3>
        <div className="experience-item">
          <h4>Senior Frontend Developer</h4>
          <div className="company-details">
            <p>Company</p>
            <p className="location">Location</p>
            <p><span>2018</span> - <span>Present</span></p>
          </div>
          <p className="experience-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
          </p>
        </div>
        <div className="experience-item">
          <h4>Frontend Developer</h4>
          <div className="company-details">
            <p>Company</p>
            <p className="location">Location</p>
            <p><span>2015</span> - <span>2018</span></p>
          </div>
          <p className="experience-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
          </p>
        </div>
        <div className="experience-item">
          <h4>Junior Developer</h4>
          <div className="company-details">
            <p>Company</p>
            <p className="location">Location</p>
            <p><span>2012</span> - <span>2015</span></p>
          </div>
          <p className="experience-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
          </p>
        </div>
      </div>
    )
  }
}

export default ExperiencePreview
