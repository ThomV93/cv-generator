const LenguagePreview = props => {
  const {lenguages} = props;

  return (
    <div className="lenguage-preview">
      <h3>Lenguage(s)</h3>
      <ul className="lenguage-container">
        {/* display each element of the array */}
        {lenguages.map(lenguage => {
          return(
            <li key={lenguage.id}>{lenguage.title}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default LenguagePreview
