import { Component } from "react";

class ContactForm extends Component {
	render() {
    const {handleChange, contactInfo} = this.props;

		return(
      <form>
        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail adress" 
          value={contactInfo.email} 
          onChange={e => {handleChange(e, "contactInfo")}}>
        </input>
        <label htmlFor="phone">Phone Number:</label>
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          value={contactInfo.phone} 
          onChange={e => {handleChange(e, "contactInfo")}}>
        </input>
        <label htmlFor="location">Location:</label>
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          value={contactInfo.location} 
          onChange={e => {handleChange(e, "contactInfo")}}>
        </input>
        <label htmlFor="site">Website:</label>
        <input 
          type="url" 
          name="site" 
          placeholder="website" 
          value={contactInfo.site} 
          onChange={e => {handleChange(e, "contactInfo")}}>
        </input>
      </form>
		)
	}

}

export default ContactForm;