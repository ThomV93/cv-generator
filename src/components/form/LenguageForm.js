const LenguageForm = props => {
  const {onSubmitLenguage, handleChange, lenguage} = props;

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default LenguageForm;