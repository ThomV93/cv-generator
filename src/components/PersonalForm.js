import { Component } from "react";

class PersonalForm extends Component {
	render() {
		const {handleChange, personalInfo} = this.props;

		return(
			<form>
				<label htmlFor="name">First Name:</label>
				<input type="text" name="name" placeholder="First name" value={personalInfo.name} onChange={handleChange}></input>
				<label htmlFor="lastName">Last Name:</label>
				<input type="text" name="lastName" placeholder="Last name" value={personalInfo.lastName} onChange={handleChange}></input>
				<label htmlFor="role">Current Role:</label>
				<input type="text" name="role" placeholder="Current role" value={personalInfo.role} onChange={handleChange}></input>
				<label htmlFor="profile">Profile:</label>
				<input name="profile" placeholder="Profile" value={personalInfo.profile} onChange={handleChange}></input>
			</form>
		)
	}
}

export default PersonalForm;