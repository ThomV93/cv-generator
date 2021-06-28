const ProfilePreview = props => {
  const {personalInfo} = props;

  return (
    <div className="profile-preview">
      <h1 className="user-name">{personalInfo.name} <span>{personalInfo.lastName}</span></h1>
      <h2 className="professional-position">{personalInfo.role}</h2>
      <h3>Profile</h3>
      <p>
        {personalInfo.profile}
      </p>
    </div>
  );
};

export default ProfilePreview
