import "./styles/header.scss";

const Header = props => {
  const { togglePreview, display } = props;

  return (
    <header>
      <h1>CV Generator</h1>
      <button
        className="reset-print-btn"
        type="button"
        style={{backgroundColor: display ? "#ff2f2f" : "#4CAF50"}}>
          {display ? "Reset All" : "Print PDF"}
      </button>
      <button 
        className="preview-form-btn"
        type="button" 
        onClick={() => { togglePreview()} }>
          {display ? "Preview" : "Form"}
      </button>
    </header>
  );
};

export default Header
