const WorkForm = props => {
  const {onSubmitJob, handleChange, workExperience} = props;

  return(
    <form onSubmit={onSubmitJob}>
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
      <button type="submit">Add job</button>
    </form>
  );
};

export default WorkForm;