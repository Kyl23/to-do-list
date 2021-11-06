import Input from "./input";
import PutButton from "./put_to_do"
import React from 'react'

function Header({txt,setTxt,setTask}) {
    return (
        <div className="header">
            <Input 
                txt={txt} 
                setTxt={setTxt}
            />
            <PutButton 
                txt={txt} 
                setTxt={setTxt} 
                setTask={setTask}
            />
        </div>
    )
}

export default Header


        