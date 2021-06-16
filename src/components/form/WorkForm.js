import { Component } from "react";

class WorkForm extends Component {
	render() {
    const {onSubmitJob, handleChange, workExperience} = this.props;

		return(
      <form onSubmit={onSubmitJob}>
        <label htmlFor="position">Position:</label>
        <input 
          type="text" 
          name="position" 
          placeholder="Position" 
          required 
          value={workExperience.position} 
          onChange={(e) => {handleChange(e, "workExperience")}}>
        </input>
        <label htmlFor="company">Company:</label>
        <input 
          type="text" 
          name="company" 
          placeholder="Company" 
          required 
          value={workExperience.company} 
          onChange={(e) => {handleChange(e, "workExperience")}}>
        </input>
        <label htmlFor="location">Location:</label>
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          required 
          value={workExperience.location} 
          onChange={(e) => {handleChange(e, "workExperience")}}>
        </input>
        <label htmlFor="from">From:</label>
        <input 
          type="month" 
          name="from" 
          required 
          value={workExperience.from} 
          onChange={(e) => {handleChange(e, "workExperience")}}>
        </input>
        <label htmlFor="to">To:</label>
        <input 
          type="month" 
          name="to" 
          required 
          value={workExperience.to} 
          onChange={(e) => {handleChange(e, "workExperience")}}>
        </input>
        <label htmlFor="description">Further Description:</label>
        <textarea 
          name="description" 
          placeholder="Expand on details about your role" 
          value={workExperience.description} 
          onChange={(e) => {handleChange(e, "workExperience")}}>
        </textarea>
        <button type="submit">Add job</button>
      </form>
		)
	}

}

export default WorkForm;