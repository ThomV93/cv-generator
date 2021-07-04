import React from "react";
import ContactPreview from "./ContactPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import ExpertisePreview from "./ExpertisePreview";
import ProfilePreview from "./ProfilePreview";
import profile from "../../icons/profile.png";
import "./styles/preview.scss";

const CvPreview = React.forwardRef((props, ref) => {
  const {
    userImage,
    personalInfo,
    contactInfo,
    jobs,
    schools,
    skills
  } = props;

  return (
    <div className="preview-container" ref={ref}>
      <div className="sidebar">
        <img className="profile-img" src={userImage.imagePreviewUrl === "" ? profile : userImage.imagePreviewUrl} alt="profile icon"/>
        <ContactPreview contactInfo={contactInfo}/>
        <EducationPreview schools={schools}/>
        <ExpertisePreview skills={skills}/>
      </div>
      <div className="main-section">
        <ProfilePreview personalInfo={personalInfo}/>
        <ExperiencePreview jobs={jobs}/>
      </div>
    </div>
  );
});

export default CvPreview
