import Input from "./input";
import Put_Button from "./put_to_do"
import React from 'react'

function Header({txt,SetTxt,SetTask}) {
    return (
        <div className="header">
            <Input txt={txt} settxt={SetTxt}/>
            <Put_Button txt={txt} settxt={SetTxt} settask={SetTask}/>
        </div>
    )
}

export default Header


        