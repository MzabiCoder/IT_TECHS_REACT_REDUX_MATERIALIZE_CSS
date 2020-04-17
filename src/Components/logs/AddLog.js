import React,{useState} from 'react'
import PropTypes from 'prop-types'

const AddLog = props => {
    const [tech,setTech]=useState('')
    const [attention,setAttention]=useState(false)
    const [message,setMessage]=useState('')
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
             
        </div>
    )
}

AddLog.propTypes = {

}
const modalStyle = {
    width: '80%',
    height:'80%'
}

export default AddLog
