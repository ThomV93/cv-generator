import { Component } from 'react'
import ContactForm from "./ContactForm";
import EducationForm from "./EducationForm";
import PersonalForm from "./PersonalForm";
import SkillForm from "./SkillForm";
import WorkForm from "./WorkForm";


export class CvForm extends Component {
  render() {
    const {personalInfo, contactInfo, workExperience, education, skill} = this.props;
    const {handleChange, onSubmitJob, onSubmitSchool, onSubmitSkill} = this.props;

    return (
      <div className="main-form">
        <div id="personal-info">
          <h2>Personal Information</h2>
          <PersonalForm personalInfo={personalInfo} handleChange={handleChange}/>
        </div>
        <div id="contact-info">
          <h2>Contact Information</h2>
          <ContactForm contactInfo={contactInfo} handleChange={handleChange}/>
        </div>
        <div id="work-experience">
          <h2>Work Experience</h2>
          <WorkForm workExperience={workExperience} handleChange={handleChange} onSubmitJob={onSubmitJob}/>
        </div>
        <div id="education">
          <h2>Education</h2>
          <EducationForm education={education} handleChange={handleChange} onSubmitSchool={onSubmitSchool}/>
        </div>
        <div id="expertise">
          <h2>Expertise</h2>
          <SkillForm skill={skill} handleChange={handleChange} onSubmitSkill={onSubmitSkill}/>
        </div>
      </div>
    )
  }
}

export default CvForm

