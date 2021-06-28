const ContactForm = props => {
  const {handleChange, contactInfo} = props;

  return(
    <form>
      <label htmlFor="email">E-mail:</label>
      <input 
        name="email" 
        type="email" 
        placeholder="E-mail adress" 
        value={contactInfo.email} 
        onChange={e => {handleChange(e, "contactInfo")}}>
      </input>
      <label htmlFor="phone">Phone Number:</label>
      <input 
        name="phone" 
        type="tel" 
        placeholder="Phone Number" 
        value={contactInfo.phone} 
        onChange={e => {handleChange(e, "contactInfo")}}>
      </input>
      <label htmlFor="location">Location:</label>
      <input 
        name="location" 
        type="text" 
        placeholder="Location" 
        value={contactInfo.location} 
        onChange={e => {handleChange(e, "contactInfo")}}>
      </input>
      <label htmlFor="site">Website:</label>
      <input 
        name="site" 
        type="url" 
        placeholder="website" 
        value={contactInfo.site} 
        onChange={e => {handleChange(e, "contactInfo")}}>
      </input>
    </form>
  );
};

export default ContactForm;