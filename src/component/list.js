import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

function List({tasks,settasks,type,Toggle,Delete_}) {
    return (
        <>
            {tasks.map((task)=>(
                <Button key={task.value} text={task} Toggle={Toggle} type={type} Delete_={Delete_}/>
            ))}
        </>
    )
}
List.prototype={
    settasks:PropTypes.func.isRequired,
    tasks:PropTypes.array.isRequired,
    Toggle:PropTypes.func.isRequired,
    Delete_:PropTypes.func.isRequired,
}
export default List
