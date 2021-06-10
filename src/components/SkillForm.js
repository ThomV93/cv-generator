import { Component } from "react";

class SkillForm extends Component {
	render() {
    const {onSubmitSkill, handleChange, skill} = this.props;

		return(
      <form onSubmit={onSubmitSkill}>
        <label htmlFor="title">Relevant Skills:</label>
        <input type="text" name="title" placeholder="List your top skills" required value={skill.title} onChange={e => {handleChange(e, "skill")}}></input>
        <button type="submit">Submit</button>
      </form>
		)
	}

}

export default SkillForm;