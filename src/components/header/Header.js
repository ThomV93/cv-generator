import "./styles/header.scss";

const Header = props => {
  const { togglePreview, display } = props;

  return (
    <header>
      <h1>CV Generator</h1>
      <button 
        type="button" 
        onClick={() => { togglePreview()} }>
          {display ? "Preview" : "Form"}
      </button>
    </header>
  );
};

export default Header
