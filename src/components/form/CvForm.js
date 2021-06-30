import ContactForm from "./ContactForm";
import EducationForm from "./EducationForm";
import PersonalForm from "./PersonalForm";
import SkillForm from "./SkillForm";
import WorkForm from "./WorkForm";
import LenguageForm from './LenguageForm';
import "./styles/form.scss";

const CvForm = props => {
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
    userImage
  } = props;

  const {
    handleChange,
    handleImage,
    handleReset,
    handleArrayReset,
    onSubmitJob, 
    onSubmitSchool, 
    onSubmitSkill,
    onSubmitLenguage
  } = props;

  return (
    <div className="main-form">
      <div className="form">
        <h2>Personal Information</h2>
        <PersonalForm 
          personalInfo={personalInfo}
          userImage={userImage}
          handleChange={handleChange}
          handleImage={handleImage}
        />
      </div>
      <div className="form">
        <h2>Contact Information</h2>
        <ContactForm 
          contactInfo={contactInfo} 
          handleChange={handleChange}
        />
      </div>
      <div className="form">
        <h2>Work Experience <span>({jobs.length})</span></h2>
        <WorkForm 
          workExperience={workExperience} 
          handleChange={handleChange}
          handleReset={handleReset}
          handleArrayReset={handleArrayReset}
          onSubmitJob={onSubmitJob}
        />
      </div>
      <div className="form">
        <h2>Education <span>({schools.length})</span></h2>
        <EducationForm 
          education={education} 
          handleChange={handleChange} 
          handleReset={handleReset}
          handleArrayReset={handleArrayReset}
          onSubmitSchool={onSubmitSchool}
        />
      </div>
      <div className="form">
        <h2>Expertise <span>({skills.length})</span></h2>
        <SkillForm 
          skill={skill} 
          handleChange={handleChange}
          handleArrayReset={handleArrayReset}
          onSubmitSkill={onSubmitSkill}
        />
      </div>
      <div className="form">
        <h2>Lenguage <span>({lenguages.length})</span></h2>
        <LenguageForm 
          lenguage={lenguage} 
          handleChange={handleChange}
          handleArrayReset={handleArrayReset}
          onSubmitLenguage={onSubmitLenguage}
        />
      </div>
    </div>
  );
};

export default CvForm

