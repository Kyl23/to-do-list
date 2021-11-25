import Input from "./input";
import PutButton from "./put_to_do";
import React, { useState } from "react";
import { HeadDiv } from "../../style/css_element";
function Header() {
  const [text, setText] = useState("");
  return (
    <HeadDiv>
      <Input text={text} setText={setText} />
      <PutButton text={text} setText={setText} />
    </HeadDiv>
  );
}

export default Header;
