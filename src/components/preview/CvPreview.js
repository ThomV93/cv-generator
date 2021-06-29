import ContactPreview from "./ContactPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import ExpertisePreview from "./ExpertisePreview";
import LenguagePreview from "./LenguagePreview";
import ProfilePreview from "./ProfilePreview";
import profile from "../../icons/profile.png";
import "./styles/preview.scss";

const CvPreview = props => {
  const {
    userImage,
    personalInfo,
    contactInfo,
    jobs,
    schools,
    skills,
    lenguages
  } = props;

  return (
    <div className="preview-container">
      <div className="sidebar">
        <img className="profile-img" src={userImage.imagePreviewUrl === "" ? profile : userImage.imagePreviewUrl} alt="profile icon"/>
        <ContactPreview contactInfo={contactInfo}/>
        <EducationPreview schools={schools}/>
        <ExpertisePreview skills={skills}/>
        <LenguagePreview lenguages={lenguages}/>
      </div>
      <div className="main-section">
        <ProfilePreview personalInfo={personalInfo}/>
        <ExperiencePreview jobs={jobs}/>
      </div>
    </div>
  );
};

export default CvPreview
