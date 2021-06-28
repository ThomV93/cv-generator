const EducationPreview = props => {
  const {schools} = props;

  return (
    <div className="education-preview">
      <h3>Education</h3>
      {/* display each element of the array */}
      {schools.map(school => {
        return(
          <div className="education-item" key={school.id}>
            <p className="degree">{school.degree}</p>
            <p>{school.school}</p>
            <p>{school.location}</p>
            <p><span>{school.from}</span> - <span>{school.to}</span></p>
          </div>
        )
      })}
    </div>
  );
};

export default EducationPreview
