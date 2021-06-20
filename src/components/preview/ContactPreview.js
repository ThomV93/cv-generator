import { Component } from "react";
import phone from "../../icons/phone.svg";
import mail from "../../icons/mail.svg";
import location from "../../icons/location.svg";
import linkedin from "../../icons/linkedin.svg";

export class ContactPreview extends Component {
  render() {
    return (
      <div className="contact-preview">
        <h3>Contact</h3>
        <div className="contact-item">
          <img className="contact-icon" src={phone} alt="phone"></img>
          <p>911 145 575</p>
        </div>
        <div className="contact-item">
          <img className="contact-icon" src={mail} alt="mail"></img>
          <p>john.doe@gmail.com</p>
        </div>
        <div className="contact-item">
          <img className="contact-icon" src={location} alt="location"></img>
          <p>Matosinhos, PT</p>
        </div>
        <div className="contact-item">
          <img className="contact-icon" src={linkedin} alt="linkedin"></img>
          <p>linkedin.com/you</p>
        </div>
      </div>
    )
  }
}

export default ContactPreview
