import {Component} from "react";
import uniqid from "uniqid";
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
        phone: "",
        location: "",
        site: "",
      },

      workExperience: {
        id: uniqid(),
        position: "",
        company: "",
        location: "",
        from: "",
        to: "",
        description: "",
      },
      jobs: [],

      education: {
        id: uniqid(),
        degree: "",
        school: "",
        location: "",
        from: "",
        to: "",
        description: "",
      },
      schools: [],

      skill: {
        id: uniqid(),
        title: "",
      },
      skills: [],
    }

    this.handleChange = this.handleChange.bind(this);
  };

  /* Dynamic input event handler */
  handleChange = (e, parent) => {
    const value = e.target.value
    /* Copy a version of the existing object and change only the necessary */
    this.setState(prevState => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [e.target.name]: value,
      }
    }))
  };

  render() {
    const {handleChange} = this
    const {personalInfo, contactInfo, workExperience, education, skill} = this.state;

    return(
      <div>
        <div id="header">
          <h1>CV Generator</h1>
        </div>
        <div id="generator-container">
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
            <WorkForm workExperience={workExperience} handleChange={handleChange}/>
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
