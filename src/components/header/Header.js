import { Component } from "react";
import "./styles/header.scss";

export class Header extends Component {
  render() {
    const { togglePreview, display } = this.props;

    return (
      <header>
        <h1>CV Generator</h1>
        <button 
          type="button" 
          onClick={() => { togglePreview()} }>
            {display ? "Preview" : "Form"}
        </button>
      </header>
    )
  }
}

export default Header
