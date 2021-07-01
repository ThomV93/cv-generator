const PersonalForm = props => {
	const {
    personalInfo, 
    userImage,
    handleImage, 
    handleChange, 
  } = props;

  return(
    <form>
      <label htmlFor="name">First Name:</label>
      <input 
        name="name"
        type="text" 
        placeholder="First name" 
        value={personalInfo.name}
        onChange={e => {handleChange(e, "personalInfo")}}>
      </input>
      <label htmlFor="lastName">Last Name:</label>
      <input 
        name="lastName" 
        type="text" 
        placeholder="Last name" 
        value={personalInfo.lastName} 
        onChange={e => {handleChange(e, "personalInfo")}}>
      </input>
      <label htmlFor="userImage">Profile Image:</label>
      <input
        style={userImage.imagePreviewUrl === "" ? {backgroundColor: "#fff"} : {backgroundColor: "#e9fce9"}}
        name="userImage"
        type="file"
        accept="image/jpeg, image/png"
        onChange={e =>{handleImage(e)}}>
      </input>
      <label htmlFor="role">Current Role:</label>
      <input 
        name="role"
        type="text" 
        placeholder="Current role" 
        value={personalInfo.role} 
        onChange={e => {handleChange(e, "personalInfo")}}>
      </input>
      <label htmlFor="profile">Profile:</label>
      <textarea 
        name="profile" 
        placeholder="Describe yourself" 
        value={personalInfo.profile} 
        onChange={e => {handleChange(e, "personalInfo")}}>
      </textarea>
    </form>
  );
};

export default PersonalForm;