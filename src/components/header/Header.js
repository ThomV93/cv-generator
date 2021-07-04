import "./styles/header.scss";

const Header = props => {
  const {
    resetState,
    handlePrint,
    togglePreview, 
    display 
  } = props;

  return (
    <header>
      <h1>CV Generator</h1>
      <div className="btn-container">
        <button
          className="mockup-btn"
          type="button">
            Mockup
        </button>
        <button
          className="reset-print-btn"
          type="button"
          onClick={display ? () => {resetState()} : () => {handlePrint()}}
          style={{backgroundColor: display ? "#ff2f2f" : "#4CAF50"}}>
            {display ? "Reset All" : "Print PDF"}
        </button>
        <button 
          className="preview-form-btn"
          type="button" 
          onClick={() => {togglePreview()} }>
            {display ? "Preview" : "Form"}
        </button>
      </div>
    </header>
  );
};

export default Header
