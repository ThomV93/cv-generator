import { Component } from "react";

class WorkForm extends Component {
	render() {
    const {handleChange, workExperience} = this.props;

		return(
      <form>
        <label htmlFor="position">Position:</label>
        <input type="text" name="position" placeholder="Position" value={workExperience.position} onChange={(e) => {handleChange(e, "workExperience")}}></input>
        <label htmlFor="company">Company:</label>
        <input type="text" name="company" placeholder="Company" value={workExperience.company} onChange={(e) => {handleChange(e, "workExperience")}}></input>
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" placeholder="Location" value={workExperience.location} onChange={(e) => {handleChange(e, "workExperience")}}></input>
        <label htmlFor="from">From:</label>
        <input type="month" name="from" value={workExperience.from} onChange={(e) => {handleChange(e, "workExperience")}}></input>
        <label htmlFor="to">To:</label>
        <input type="month" name="to" value={workExperience.to} onChange={(e) => {handleChange(e, "workExperience")}}></input>
        <label htmlFor="description">Further Description:</label>
        <textarea name="description" placeholder="Further Description" value={workExperience.description} onChange={(e) => {handleChange(e, "workExperience")}}></textarea>
      </form>
		)
	}

}

export default WorkForm;