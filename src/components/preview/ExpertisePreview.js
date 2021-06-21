import { Component } from "react";

export class ExpertisePreview extends Component {
  render() {
    return (
      <div className="expertise-preview">
        <h3>Expertise</h3>
        <ul className="expertise-container">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Webpack</li>
          <li>React.js</li>
        </ul>
      </div>
    )
  }
}

export default ExpertisePreview
