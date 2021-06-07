import {Component} from "react";
import ContactForm from "./components/ContactForm";
import EducationForm from "./components/EducationForm";
import PersonalForm from "./components/PersonalForm";
import SkillForm from "./components/SkillForm";
import WorkForm from "./components/WorkForm";

class CvGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo: {
        name: "",
        lastName: "",
        role: "",
        profile: "",
      },

      contactInfo: {
        email: "",
        adress: "",
        phone: "",
        description: "",
      },

      workExperience: {
        id: "",
        position: "",
        company: "",
        location: "",
        started: "",
        ended: "",
        description: "",
      },
      jobs: [],

      education: {
        id: "",
        degree: "",
        school: "",
        location: "",
        started: "",
        ended: "",
        description: "",
      },
      schools: [],

      skill: {
        id: "",
        title: "",
      },
      skills: [],
    }
  };

  render() {
    const {personalInfo, contactInfo, workExperience, education, skill} = this.state;

    return(
      <div>
        <div id="header">
          <h1>CV Generator</h1>
        </div>
        <div id="generator-container">
          <div id="personal-info">
            <h2>Personal Information</h2>
            <PersonalForm personalInfo={personalInfo}/>
          </div>
          <div id="contact-info">
            <h2>Contact Information</h2>
            <ContactForm contactInfo={contactInfo}/>
          </div>
          <div id="work-experience">
            <h2>Work Experience</h2>
            <WorkForm workExperience={workExperience}/>
          </div>
          <div id="education">
            <h2>Education</h2>
            <EducationForm education={education}/>
          </div>
          <div id="expertise">
            <h2>Expertise</h2>
            <SkillForm skill={skill}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CvGenerator;
