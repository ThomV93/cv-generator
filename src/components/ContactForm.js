import { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return(
      <form>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="E-mail adress"></input>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" placeholder="Adress"></input>
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" placeholder="Phone Number"></input>
        <label htmlFor="site">Website:</label>
        <input type="url" id="site" placeholder="website"></input>
        <label htmlFor="further-description">Further Description:</label>
        <input id="further-description" placeholder="Further Description"></input>
      </form>
		)
	}

}

export default ContactForm;