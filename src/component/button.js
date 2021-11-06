import React from 'react'
import PropTypes from 'prop-types'

function Button_({text,toggle,delete_}) {
    return (
        <div className={(text.reminder)?"event":"non-event"} onClick={()=>toggle(text.id)}>{text.value}<span onClick={()=>delete_(text.id)}>x</span></div>
    )
}
Button_.prototype={
    settask:PropTypes.func.isRequired,
    task:PropTypes.array.isRequired
}
export default Button_
