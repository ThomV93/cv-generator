const ExperiencePreview = props => {
  const {jobs} = props;

  return (
    <div className="experience-preview">
      <h3>Professional Experience</h3>
      {/* display each element of the array */}
      {jobs.map(job => {
        return(
          <div className="experience-item" key={job.id}>
            <h4>{job.position}</h4>
            <div className="company-details">
              <p>{job.company}</p>
              <p className="location">{job.location}</p>
              <p><span>{job.from}</span> - <span>{job.to}</span></p>
            </div>
            <p className="experience-description">
              {job.description}
            </p>
          </div>
        )
      })}
    </div>
  );
};

export default ExperiencePreview
