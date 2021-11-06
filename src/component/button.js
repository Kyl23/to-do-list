import React from 'react'
import PropTypes from 'prop-types'

function Button_({text,toggle,delete_,type}) {
    return (
        <div className="flex_p">
            <div className={(type)?"event":"non-event"} onClick={()=>toggle(text.id),(e)=>{e.target.className=(e.target.className==="event")?"non-event":"event"}}>{text.value}</div>
            <span onClick={()=>delete_(text.id)}>x</span>
        </div>
    )
}
Button_.prototype={
    settask:PropTypes.func.isRequired,
    task:PropTypes.array.isRequired,
    type:PropTypes.bool.isRequired
}
export default Button_
