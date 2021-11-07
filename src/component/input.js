import PropTypes from 'prop-types'
import { TextInput } from './css_element'

const Input = ({txt,setTxt}) => {
    return (
        <TextInput type="text" placeholder="新增任務" value={txt} onChange={
            (e)=>setTxt(e.target.value)
        }/>
    )
}
Input.prototype={
    txt:PropTypes.string.isRequired,
    setTxt:PropTypes.func.isRequired
}
export default Input

