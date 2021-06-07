import { Component } from "react";

class WorkForm extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return(
      <form>
        <label htmlFor="position-title">Position Title:</label>
        <input type="text" id="position-title" placeholder="Position title"></input>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" placeholder="Company name"></input>
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

export default WorkForm;