import { Component } from "react";
import profile from "../../icons/profile.png";
import ContactPreview from "./ContactPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import ExpertisePreview from "./ExpertisePreview";
import LenguagePreview from "./LenguagePreview";
import ProfilePreview from "./ProfilePreview";
import "./styles/preview.scss";

export class CvPreview extends Component {
  render() {
    const {
      personalInfo,
      contactInfo,
      jobs,
      schools,
      skills,
      lenguages
    } = this.props

    return (
      <div className="preview-container">
        <div className="sidebar">
          <img className="profile-img" src={profile} alt="profile icon"/>
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
    )
  }
}

export default CvPreview
