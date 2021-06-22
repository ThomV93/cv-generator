import { Component } from "react";
import uniqid from "uniqid";
import Header from "./components/header/Header";
import CvForm from "./components/form/CvForm";
import CvPreview from "./components/preview/CvPreview";
import "./CvGenerator.scss";

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
      },
      schools: [],

      skill: {
        id: uniqid(),
        title: "",
      },
      skills: [],

      lenguage: {
        id: uniqid(),
        title: "",
      },
      lenguages: [],

      display: true,
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitJob = this.onSubmitJob.bind(this);
    this.onSubmitSchool = this.onSubmitSchool.bind(this);
    this.onSubmitSkill = this.onSubmitSkill.bind(this);
    this.onSubmitLenguage = this.onSubmitLenguage.bind(this);
  };

  // Dynamic input handler
  handleChange = (e, parent) => {
    const value = e.target.value
    //Copy a version of the existing object and change only the necessary
    this.setState(prevState => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [e.target.name]: value,
      }
    }))
  };

  onSubmitJob = e => {
    // prevent default page refresh
    e.preventDefault();
    this.setState({
      // add object to array and clear the values
      jobs: this.state.jobs.concat(this.state.workExperience),
      workExperience: {
        id: uniqid(),
        position: "",
        company: "",
        location: "",
        from: "",
        to: "",
        description: "",
      },
    });
  };

  onSubmitSchool = e => {
    e.preventDefault();
    this.setState({
      schools: this.state.schools.concat(this.state.education),
      education: {
        id: uniqid(),
        degree: "",
        school: "",
        location: "",
        from: "",
        to: "",
      },
    });
  };

  onSubmitSkill = e => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        id: uniqid(),
        title: "",
      },
    });
  };

  onSubmitLenguage = e => {
    e.preventDefault();
    this.setState({
      lenguages: this.state.lenguages.concat(this.state.lenguage),
      lenguage: {
        id: uniqid(),
        title: "",
      },
    });
  };

  togglePreview = () => {
    this.setState(prevState => ({
      display: !prevState.display,
    }));
  };

  render() {
    const {
      handleChange, 
      onSubmitJob, 
      onSubmitSchool, 
      onSubmitSkill,
      onSubmitLenguage,
      togglePreview
    } = this

    const {
      personalInfo, 
      contactInfo, 
      workExperience,
      jobs,
      education,
      schools, 
      skill,
      skills,
      lenguage,
      lenguages,
      display
    } = this.state;

    return(
      <div className="main-container">
        <Header togglePreview={togglePreview} display={display}/>
        {
          display ?
          <CvForm
            personalInfo={personalInfo}
            contactInfo={contactInfo}
            workExperience={workExperience}
            education={education}
            skill={skill}
            lenguage={lenguage}
            handleChange={handleChange}
            onSubmitJob={onSubmitJob}
            onSubmitSchool={onSubmitSchool}
            onSubmitSkill={onSubmitSkill}
            onSubmitLenguage={onSubmitLenguage}
          /> :
          <CvPreview 
            personalInfo={personalInfo}
            contactInfo={contactInfo}
            jobs={jobs}
            schools={schools}
            skills={skills}
            lenguages={lenguages}
          />
        }
      </div>
    );
  }
}

export default CvGenerator;
