import { Component } from "react";

class PersonalForm extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return(
			<form>
				<label htmlFor="first-name">First Name:</label>
				<input type="text" id="first-name" placeholder="First name"></input>
				<label htmlFor="last-name">Last Name:</label>
				<input type="text" id="last-name" placeholder="Last name"></input>
				<label htmlFor="current-role">Current Role:</label>
				<input type="text" id="current-role" placeholder="Current role"></input>
				<label htmlFor="profile">Profile:</label>
				<input id="profile" placeholder="Profile"></input>
			</form>
		)
	}

}

export default PersonalForm;