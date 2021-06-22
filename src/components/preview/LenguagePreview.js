import { Component } from 'react'

export class LenguagePreview extends Component {
  render() {
    const {lenguages} = this.props;

    return (
      <div className="lenguage-preview">
        <h3>Lenguage(s)</h3>
        <ul className="lenguage-container">
          {lenguages.map(lenguage => {
            return(
              <li>{lenguage.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default LenguagePreview
