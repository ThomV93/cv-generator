import { Component } from "react";

class EducationForm extends Component {
	render() {
    const {onSubmitSchool, handleChange, education} = this.props;

		return(
      <form onSubmit={onSubmitSchool}>
        <label htmlFor="degree">Degree:</label>
        <input
          name="degree" 
          type="text" 
          placeholder="Degree" 
          required 
          value={education.degree} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="school">School or University:</label>
        <input 
          name="school" 
          type="text" 
          placeholder="School or University" 
          required 
          value={education.school} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="location">Location:</label>
        <input 
          name="location" 
          type="text" 
          placeholder="Location" 
          required 
          value={education.location} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="from">From:</label>
        <input 
          name="from" 
          type="month" 
          required 
          value={education.from} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="to">To:</label>
        <input 
          name="to" 
          type="month" 
          required 
          value={education.to} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <button type="submit">Submit</button>
      </form>
		)
	}
}

export default EducationForm;