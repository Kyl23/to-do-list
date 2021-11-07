import { useState } from 'react'
import PropTypes from 'prop-types'
import {ButtonContainer , DeleteIcon ,DynamicRemindStatus} from './css_element'

function Button_({task,toggle,delete_}) {
    const [change, setchange] = useState(0)
    
    const handle = (id)=>{
        toggle(id)
        setchange((change === 0)? 1:0) //force update
    }
    return (
        <ButtonContainer>
            <DynamicRemindStatus task={task} onClick={()=>handle(task.id)}>{task.value}</DynamicRemindStatus>
            <DeleteIcon onClick = {() => delete_(task.id)}> x </DeleteIcon>
        </ButtonContainer>
    )
}
Button_.prototype = {
    tasks:PropTypes.array.isRequired,
    type:PropTypes.bool.isRequired
}
export default Button_
