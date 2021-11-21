import Input from "./input";
import PutButton from "./put_to_do";
import React from "react";
import { HeadDiv } from "../../style/css_element";
function Header() {
  return (
    <HeadDiv>
      <Input />
      <PutButton />
    </HeadDiv>
  );
}

export default Header;
