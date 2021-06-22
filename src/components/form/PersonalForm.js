import { Component } from "react";

class PersonalForm extends Component {
	render() {
		const {handleChange, personalInfo} = this.props;

		return(
			<form>
				<label htmlFor="name">First Name:</label>
				<input 
					name="name"
					type="text" 
					placeholder="First name" 
					value={personalInfo.name}
					onChange={(e) => {handleChange(e, "personalInfo")}}>
				</input>
				<label htmlFor="lastName">Last Name:</label>
				<input 
					name="lastName" 
					type="text" 
					placeholder="Last name" 
					value={personalInfo.lastName} 
					onChange={(e) => {handleChange(e, "personalInfo")}}>
				</input>
				<label htmlFor="role">Current Role:</label>
				<input 
					name="role"
					type="text" 
					placeholder="Current role" 
					value={personalInfo.role} 
					onChange={(e) => {handleChange(e, "personalInfo")}}>
				</input>
				<label htmlFor="profile">Profile:</label>
				<textarea 
					name="profile" 
					placeholder="Describe yourself" 
					value={personalInfo.profile} 
					onChange={(e) => {handleChange(e, "personalInfo")}}>
				</textarea>
			</form>
		)
	}
}

export default PersonalForm;