import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

function List({task,settask,type,toggle,delete_}) {
    return (
        <>
            {task.map((task,index)=>(
                <Button key={index} text={task} toggle={toggle} type={type} delete_={delete_}/>
            ))}
        </>
    )
}
List.prototype={
    settask:PropTypes.func.isRequired,
    task:PropTypes.array.isRequired,
    toggle:PropTypes.func.isRequired,
    delete_:PropTypes.func.isRequired,
}
export default List
