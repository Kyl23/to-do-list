import PropTypes from 'prop-types'
const Input = ({txt,setTxt}) => {
   
    return (
        <input className="inpt" type="text" placeholder="新增任務" value={txt} onChange={(e)=>setTxt(e.target.value)}/>
    )
}
Input.prototype={
    txt:PropTypes.string.isRequired,
    setTxt:PropTypes.func.isRequired
}
export default Input

