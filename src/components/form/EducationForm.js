import { Component } from "react";

class EducationForm extends Component {
	render() {
    const {onSubmitSchool, handleChange, education} = this.props;

		return(
      <form onSubmit={onSubmitSchool}>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text" 
          name="degree" 
          placeholder="Degree" 
          required 
          value={education.degree} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="school">School or University:</label>
        <input 
          type="text" 
          name="school" 
          placeholder="School or University" 
          required 
          value={education.school} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="location">Location:</label>
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          required 
          value={education.location} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="from">From:</label>
        <input 
          type="month" 
          name="from" 
          required 
          value={education.from} 
          onChange={(e) => {handleChange(e, "education")}}>
        </input>
        <label htmlFor="to">To:</label>
        <input 
          type="month" 
          name="to" 
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