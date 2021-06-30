const LenguageForm = props => {
  const {
    lenguage,
    handleChange,
    handleArrayReset, 
    onSubmitLenguage, 
  } = props;

  return(
    <form onSubmit={onSubmitLenguage}>
      <label htmlFor="title">Lenguage Proficiency:</label>
      <input 
        name="title" 
        type="text" 
        placeholder="List the lenguages you are proficient in" 
        required 
        value={lenguage.title} 
        onChange={e => {handleChange(e, "lenguage")}}>
      </input>
      <button type="button" onClick={() => {handleArrayReset("lenguages")}}>Clear List</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LenguageForm;