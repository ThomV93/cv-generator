import phone from "../../icons/phone.svg";
import mail from "../../icons/mail.svg";
import location from "../../icons/location.svg";
import linkedin from "../../icons/linkedin.svg";

const ContactPreview = props => {
  const {contactInfo} = props;

  return (
    <div className="contact-preview">
      <h3>Contact</h3>
      <div className="contact-item">
        <img className="contact-icon" src={phone} alt="phone"></img>
        <p>{contactInfo.phone}</p>
      </div>
      <div className="contact-item">
        <img className="contact-icon" src={mail} alt="mail"></img>
        <p>{contactInfo.email}</p>
      </div>
      <div className="contact-item">
        <img className="contact-icon" src={location} alt="location"></img>
        <p>{contactInfo.location}</p>
      </div>
      <div className="contact-item">
        <img className="contact-icon" src={linkedin} alt="linkedin"></img>
        <p>{contactInfo.site}</p>
      </div>
    </div>
  );
};

export default ContactPreview
