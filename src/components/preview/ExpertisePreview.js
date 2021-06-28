const ExpertisePreview = props => {
  const {skills} = props;

  return (
    <div className="expertise-preview">
      <h3>Expertise</h3>
      <ul className="expertise-container">
        {/* display each element of the array */}
        {skills.map(skill => {
          return(
            <li key={skill.id}>{skill.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ExpertisePreview
