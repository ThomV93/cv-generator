import { Component } from 'react'
import ContactForm from "./ContactForm";
import EducationForm from "./EducationForm";
import PersonalForm from "./PersonalForm";
import SkillForm from "./SkillForm";
import WorkForm from "./WorkForm";
import LenguageForm from './LenguageForm';
import "./styles/form.scss";


export class CvForm extends Component {
  render() {
    const {
      personalInfo, 
      contactInfo, 
      workExperience, 
      education, 
      skill,
      lenguage
    } = this.props;

    const {
      handleChange, 
      onSubmitJob, 
      onSubmitSchool, 
      onSubmitSkill,
      onSubmitLenguage
    } = this.props;

    return (
      <div className="main-form">
        <div className="form">
          <h2>Personal Information</h2>
          <PersonalForm personalInfo={personalInfo} handleChange={handleChange}/>
        </div>
        <div className="form">
          <h2>Contact Information</h2>
          <ContactForm contactInfo={contactInfo} handleChange={handleChange}/>
        </div>
        <div className="form">
          <h2>Work Experience <span>(0)</span></h2>
          <WorkForm workExperience={workExperience} handleChange={handleChange} onSubmitJob={onSubmitJob}/>
        </div>
        <div className="form">
          <h2>Education <span>(0)</span></h2>
          <EducationForm education={education} handleChange={handleChange} onSubmitSchool={onSubmitSchool}/>
        </div>
        <div className="form">
          <h2>Expertise <span>(0)</span></h2>
          <SkillForm skill={skill} handleChange={handleChange} onSubmitSkill={onSubmitSkill}/>
        </div>
        <div className="form">
          <h2>Lenguage <span>(0)</span></h2>
          <LenguageForm lenguage={lenguage} handleChange={handleChange} onSubmitLenguage={onSubmitLenguage}/>
        </div>
      </div>
    )
  }
}

export default CvForm

