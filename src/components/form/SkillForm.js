const SkillForm = props => {
  const {
    skill,
    handleChange,
    handleArrayReset,
    onSubmitSkill, 
  } = props;

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
      <button type="button" onClick={() => {handleArrayReset("skills")}}>Clear List</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SkillForm;