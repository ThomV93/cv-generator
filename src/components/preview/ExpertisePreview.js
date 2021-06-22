import { Component } from "react";

export class ExpertisePreview extends Component {
  render() {
    const {skills} = this.props;

    return (
      <div className="expertise-preview">
        <h3>Expertise</h3>
        <ul className="expertise-container">
          {skills.map(skill => {
            return(
              <li>{skill.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ExpertisePreview
