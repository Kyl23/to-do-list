import React from 'react'
import PropTypes from 'prop-types'

function Button_({text,Toggle,Delete_,type}) {
    return (
        <div className="flex_p">
            <div className={(type)?"event":"non-event"} onClick={()=>Toggle(text.id),(e)=>{e.target.className=(e.target.className==="event")?"non-event":"event"}}>{text.value}</div>
            <span onClick={()=>Delete_(text.id)}>x</span>
        </div>
    )
}
Button_.prototype={
    settasks:PropTypes.func.isRequired,
    tasks:PropTypes.array.isRequired,
    type:PropTypes.bool.isRequired
}
export default Button_
