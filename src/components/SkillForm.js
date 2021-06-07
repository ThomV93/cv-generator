import { Component } from "react";

class SkillForm extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return(
      <form>
        <label htmlFor="skills">Relevant Skills:</label>
        <input type="text" id="skills" placeholder="List your top skills"></input>
      </form>
		)
	}

}

export default SkillForm;