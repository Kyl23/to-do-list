import React from 'react'
import PropTypes from 'prop-types'

function Button_({task,toggle,delete_,type}) {
    return (
        <div className="flex_p">
            <div className={(type)?"event":"non-event"} onClick={()=>toggle(task.id),(e)=>{e.target.className=(e.target.className==="event")?"non-event":"event"}}>{task.value}</div>
            <span onClick={()=>delete_(task.id)}>x</span>
        </div>
    )
}
Button_.prototype={
    tasks:PropTypes.array.isRequired,
    type:PropTypes.bool.isRequired
}
export default Button_
