import { Component } from "react";
import profile from "../../icons/profile.png";
import ContactPreview from "./ContactPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import ExpertisePreview from "./ExpertisePreview";
import ProfilePreview from "./ProfilePreview";
import "./styles/preview.scss";

export class CvPreview extends Component {
  render() {
    return (
      <div className="preview-container">
        <div className="sidebar">
          <img className="profile-img" src={profile} alt="profile icon"/>
          <ContactPreview />
          <EducationPreview />
          <ExpertisePreview />
        </div>
        <div className="main-section">
          <h1 className="user-name">John Doe</h1>
          <h2 className="professional-position">Frontend Developer</h2>
          <ProfilePreview />
          <ExperiencePreview />
        </div>
      </div>
    )
  }
}

export default CvPreview
