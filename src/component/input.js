import PropTypes from 'prop-types'
const Input = ({txt,settxt}) => {
   
    return (
        <div>
            <input type="text" placeholder="新增任務" value={txt} onChange={
                (e)=>settxt(e.target.value)
            }/>
        </div>
    )
}
Input.prototype={
    txt:PropTypes.string.isRequired,
    settxt:PropTypes.func.isRequired
}
export default Input

