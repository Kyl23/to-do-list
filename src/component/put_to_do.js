import React from 'react'
import PropTypes from 'prop-types'

function Put_To_Do({txt,settxt,settask}) {
    
    return (
        <>
            <input className="btn" type="button" value="新增" onClick={
                ()=>{
                    settask(txt)
                    settxt("")
                }
            }/>
        </>
    )
}
Put_To_Do.prototype={
    settask:PropTypes.func.isRequired,
    txt:PropTypes.string.isRequired,
    settxt:PropTypes.func.isRequired
}
export default Put_To_Do
