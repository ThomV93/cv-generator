import { Component } from 'react'

export class ContactPreview extends Component {
  render() {
    return (
      <div className="contact-preview">
        <h3>Contact</h3>
        <div className="contact-container">
          <div className="contact-item">
            <img className="contact-icon" src="" alt=""></img>
            <p>911 145 575</p>
          </div>
          <div className="contact-item">
            <img className="contact-icon" src="" alt=""></img>
            <p>john.doe@gmail.com</p>
          </div>
          <div className="contact-item">
            <img className="contact-icon" src="" alt=""></img>
            <p>Matosinhos, PT</p>
          </div>
          <div className="contact-item">
            <img className="contact-icon" src="" alt=""></img>
            <p>linkedin.com/you</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPreview
