import Input from "./input";
import PutButton from "./put_to_do"
import React from 'react'
import {HeadDiv} from './css_element'
function Header({txt,setTxt,setTask,addButtonRef}) {
    return (
        <HeadDiv>
            <Input 
                txt={txt} 
                setTxt={setTxt}
                addButtonRef={addButtonRef}
            />
            <PutButton 
                txt={txt} 
                setTxt={setTxt} 
                setTask={setTask}
                addButtonRef={addButtonRef}
            />
        </HeadDiv>
    )
}

export default Header


        