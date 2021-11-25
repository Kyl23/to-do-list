import React from "react";
import { Nav, NavOption, LinkCSS } from "../style/css_element";
function navigateBar({ setLegal }) {
  return (
    <Nav>
      <NavOption>
        <LinkCSS to="/to-do-list">ContextAPI</LinkCSS>
      </NavOption>
      <NavOption onClick={setLegal}>
        <LinkCSS to="/to-do-list/redux">Redux</LinkCSS>
      </NavOption>
    </Nav>
  );
}

export default navigateBar;
