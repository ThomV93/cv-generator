import { Component } from "react";
import "./styles/header.scss";

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>CV Generator</h1>
        <button type="button">Preview</button>
      </header>
    )
  }
}

export default Header
