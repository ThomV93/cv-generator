import { useState } from "react";
import uniqid from "uniqid";
import Header from "./components/header/Header";
import CvForm from "./components/form/CvForm";
import CvPreview from "./components/preview/CvPreview";
import "./CvGenerator.scss";

const CvGenerator = () => {
  const [user, setUser] = useState({
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
  });

  const [userImage, setUserImage] = useState({file: "", imagePreviewUrl: ""});

  const [display, setDisplay] = useState(true);

  const handleImage = e =>{
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setUserImage({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  // Dynamic input handler
  const handleChange = (e, parent) => {
    const value = e.target.value;
    //Copy a version of the existing object and change only the necessary
    setUser(prevState => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [e.target.name]: value,
      }
    }))
  };

  const handleReset = (e, parent) => {
    e.preventDefault();
    const obj = user[parent];
    for(let key in obj){
      if(key !== "id"){
        setUser(prevState => ({
          ...prevState,
          [parent]: {
            ...prevState[parent],
            [key]: "",
          }
        }))
      }
    };
  };

  const onSubmitJob = e => {
    // prevent default page refresh
    e.preventDefault();
    setUser({
      ...user,
      // add object to array and clear the values
      jobs: jobs.concat(workExperience),
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

  const onSubmitSchool = e => {
    e.preventDefault();
    setUser({
      ...user,
      schools: schools.concat(education),
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

  const onSubmitSkill = e => {
    e.preventDefault();
    setUser({
      ...user,
      skills: skills.concat(skill),
      skill: {
        id: uniqid(),
        title: "",
      },
    });
  };

  const onSubmitLenguage = e => {
    e.preventDefault();
    setUser({
      ...user,
      lenguages: lenguages.concat(lenguage),
      lenguage: {
        id: uniqid(),
        title: "",
      },
    });
  };

  const togglePreview = () => {
    setDisplay(display => !display);
  };
  
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
    lenguages
  } = user;

  return(
    <div className="main-container">
      <Header togglePreview={togglePreview} display={display}/>
      {
        display ?
        <CvForm
          personalInfo={personalInfo}
          contactInfo={contactInfo}
          workExperience={workExperience}
          jobs={jobs}
          education={education}
          schools={schools}
          skill={skill}
          skills={skills}
          lenguage={lenguage}
          lenguages={lenguages}
          userImage={userImage}
          handleImage={handleImage}
          handleChange={handleChange}
          handleReset={handleReset}
          onSubmitJob={onSubmitJob}
          onSubmitSchool={onSubmitSchool}
          onSubmitSkill={onSubmitSkill}
          onSubmitLenguage={onSubmitLenguage}
        /> :
        <CvPreview
          userImage={userImage}
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

export default CvGenerator;
