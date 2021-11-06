import React from 'react'
import PropTypes from 'prop-types'

function Put_To_Do({txt,settxt,settask}) {
    
    return (
        <div>
            <input type="button" value="新增" onClick={
                ()=>{
                    settask(txt)
                    settxt("")
                }
            }/>
        </div>
    )
}
Put_To_Do.prototype={
    settask:PropTypes.func.isRequired,
    txt:PropTypes.string.isRequired,
    settxt:PropTypes.func.isRequired
}
export default Put_To_Do
