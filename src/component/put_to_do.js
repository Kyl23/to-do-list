import React from 'react'
import PropTypes from 'prop-types'

function Put_To_Do({txt,setTxt,setTask}) {
    
    return (
        <input className="btn" type="button" value="新增" onClick={
            ()=>{
                setTask(txt)
                setTxt("")
            }
        }/>
    )
}
Put_To_Do.prototype={
    setTasks:PropTypes.func.isRequired,
    txt:PropTypes.string.isRequired,
    setTxt:PropTypes.func.isRequired
}
export default Put_To_Do
