const WorkForm = props => {
  const {
    workExperience,
    handleChange,
    handleReset,
    handleArrayReset,
    onSubmitJob
  } = props;

  return(
    <form onReset={e => {handleReset(e, "workExperience")}} onSubmit={onSubmitJob}>
      <label htmlFor="position">Position:</label>
      <input 
        name="position" 
        type="text" 
        placeholder="Position" 
        required 
        value={workExperience.position} 
        onChange={e => {handleChange(e, "workExperience")}}>
      </input>
      <label htmlFor="company">Company:</label>
      <input 
        name="company" 
        type="text" 
        placeholder="Company" 
        required 
        value={workExperience.company} 
        onChange={e => {handleChange(e, "workExperience")}}>
      </input>
      <label htmlFor="location">Location:</label>
      <input 
        name="location" 
        type="text" 
        placeholder="Location" 
        required 
        value={workExperience.location} 
        onChange={e => {handleChange(e, "workExperience")}}>
      </input>
      <label htmlFor="from">From:</label>
      <input 
        name="from" 
        type="month" 
        required 
        value={workExperience.from} 
        onChange={e => {handleChange(e, "workExperience")}}>
      </input>
      <label htmlFor="to">To:</label>
      <input 
        name="to" 
        type="month" 
        required 
        value={workExperience.to} 
        onChange={e => {handleChange(e, "workExperience")}}>
      </input>
      <label htmlFor="description">Further Description:</label>
      <textarea 
        name="description" 
        placeholder="Expand on details about your role" 
        value={workExperience.description} 
        onChange={e => {handleChange(e, "workExperience")}}>
      </textarea>
      <div className="button-container">
        <button type="button" onClick={() => {handleArrayReset("jobs")}}>Clear List</button>
        <button type="reset">Reset</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkForm;