const EducationForm = props => {
  const {
    education,
    handleChange, 
    handleReset,
    handleArrayReset, 
    onSubmitSchool
  } = props;

  return(
    <form onReset={e => {handleReset(e, "education")}} onSubmit={onSubmitSchool}>
      <label htmlFor="degree">Degree:</label>
      <input
        name="degree" 
        type="text" 
        placeholder="Degree" 
        required 
        value={education.degree} 
        onChange={e => {handleChange(e, "education")}}>
      </input>
      <label htmlFor="school">School or University:</label>
      <input 
        name="school" 
        type="text" 
        placeholder="School or University" 
        required 
        value={education.school} 
        onChange={e => {handleChange(e, "education")}}>
      </input>
      <label htmlFor="location">Location:</label>
      <input 
        name="location" 
        type="text" 
        placeholder="Location" 
        required 
        value={education.location} 
        onChange={e => {handleChange(e, "education")}}>
      </input>
      <label htmlFor="from">From:</label>
      <input 
        name="from" 
        type="month" 
        required 
        value={education.from} 
        onChange={e => {handleChange(e, "education")}}>
      </input>
      <label htmlFor="to">To:</label>
      <input 
        name="to" 
        type="month" 
        required 
        value={education.to} 
        onChange={e => {handleChange(e, "education")}}>
      </input>
      <div className="button-container">
        <button type="button" onClick={() => {handleArrayReset("schools")}}>Clear List</button>
        <button type="reset">Reset</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EducationForm;