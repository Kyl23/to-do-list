import Input from "./input";
import PutButton from "./put_to_do"
import React from 'react'
import {HeadDiv} from './css_element'
function Header({txt,setTxt,setTask}) {
    return (
        <HeadDiv>
            <Input 
                txt={txt} 
                setTxt={setTxt}
            />
            <PutButton 
                txt={txt} 
                setTxt={setTxt} 
                setTask={setTask}
            />
        </HeadDiv>
    )
}

export default Header


        