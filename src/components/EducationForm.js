import { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return(
      <form>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree"></input>
        <label htmlFor="school">School or University:</label>
        <input type="text" id="school" placeholder="School or University"></input>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" placeholder="Location"></input>
        <label htmlFor="starting-date">From:</label>
        <input type="date" id="starting-date"></input>
        <label htmlFor="end-date">To:</label>
        <input type="date" id="end-date"></input>
        <label htmlFor="further-description">Further Description:</label>
        <input id="further-description" placeholder="Further Description"></input>
      </form>
		)
	}

}

export default EducationForm;