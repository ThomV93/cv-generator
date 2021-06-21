import React, { Component } from 'react'

export class LenguagePreview extends Component {
  render() {
    return (
      <div className="lenguage-preview">
        <h3>Lenguage(s)</h3>
        <ul className="lenguage-container">
          <li>English</li>
          <li>Portuguese</li>
          <li>German</li>
        </ul>
      </div>
    )
  }
}

export default LenguagePreview
