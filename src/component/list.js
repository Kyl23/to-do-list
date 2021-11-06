import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

function List({task,settask,toggle,delete_}) {
    return (
        <div>
            {task.map((task,index)=>(
                <Button key={index} text={task} toggle={toggle} delete_={delete_}/>
            ))}
        </div>
    )
}
List.prototype={
    settask:PropTypes.func.isRequired,
    task:PropTypes.array.isRequired,
    toggle:PropTypes.func.isRequired,
    delete_:PropTypes.func.isRequired,
}
export default List
