import { Component } from "react";
import "./styles/header.scss";

export class Header extends Component {
  render() {
    const { togglePreview } = this.props;

    return (
      <header>
        <h1>CV Generator</h1>
        <button type="button" onClick={ () => togglePreview() }>Preview</button>
      </header>
    )
  }
}

export default Header
