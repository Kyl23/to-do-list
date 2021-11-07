import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

function List({tasks,type,toggle,delete_}) {
    return (
        <>
            {tasks.map((task)=>(
                <Button 
                    key = {task.id} 
                    task = {task} 
                    toggle = {toggle} 
                    type = {type} 
                    delete_ = {delete_}
                />
            ))}
        </>
    )
}
List.prototype = {
    setTasks:PropTypes.func.isRequired,
    tasks:PropTypes.array.isRequired,
    toggle:PropTypes.func.isRequired,
    delete_:PropTypes.func.isRequired,
}
export default List
