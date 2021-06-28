const SkillForm = props => {
  const {onSubmitSkill, handleChange, skill} = props;

  return(
    <form onSubmit={onSubmitSkill}>
      <label htmlFor="title">Relevant Skills:</label>
      <input 
        name="title" 
        type="text" 
        placeholder="List your top skills" 
        required 
        value={skill.title} 
        onChange={e => {handleChange(e, "skill")}}>
      </input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SkillForm;