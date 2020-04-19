import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addLog } from '../../actions/getLogs'
import { connect } from 'react-redux'

 
const AddLog = ({addLog}) => {
    const [tech,setTech]=useState('')
    const [attention,setAttention]=useState(false)
    const [message, setMessage] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        if (message === 0 || tech === '') {
            M.toast({ html: 'Please Enter a message and tech !!' })
            return false
        } else {
            const newLog = {
                tech,
                attention,
                message,
                date:new Date()
            }
            M.toast({html:`Log added by ${tech}`})
            addLog(newLog)
            setMessage('')
            setAttention(false)
           
      }
        
    }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                        Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                        <option value="" disabled>Select Technician</option>
                        <option value="Jhon Dow">Jhon Dow</option>
                        <option value="steve smith">steve smith</option>
                        <option value="caroline smith">caroline smith</option>
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                          <p>
                        <label>
                          <input type="checkbox" checked={attention} value={attention} onChange={() => setAttention(!attention)} />
                          <span>Needs Attention</span>
                        </label>
                      </p>



                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#1" onClick={onSubmit} className="modal-close waves-effect waves-light btn  ">Enter</a>
            </div>
        </div>
    )
}

 
const modalStyle = {
    width: '80%',
    height:'80%'
}

export default connect(null,{addLog})(AddLog)
