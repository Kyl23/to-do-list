import PropTypes from 'prop-types'
const Input = ({txt,settxt}) => {
   
    return (
        <input className="inpt" type="text" placeholder="新增任務" value={txt} onChange={
            (e)=>settxt(e.target.value)
        }/>
    )
}
Input.prototype={
    txt:PropTypes.string.isRequired,
    settxt:PropTypes.func.isRequired
}
export default Input

