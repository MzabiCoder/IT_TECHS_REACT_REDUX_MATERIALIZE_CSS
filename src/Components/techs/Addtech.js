import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
 
const Addtech = () => {
    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
     const onSubmit = e => {
        e.preventDefault()
        if (fname === 0 || lname === '') {
         M.toast({html:'Please Enter a first & last name !!'})
        } else {
            console.log('success')
            setFname('')
            setLname('')
      }
        
    }
    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>Enter Tech Credentials</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="fname" value={fname}   onChange={(e) => setFname(e.target.value)} />
                        <label htmlFor="message" className="active">
                        First name
                        </label>
                    </div>
                </div>
                
                <div className="row">
                <div className="input-field">
                    <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                    <label htmlFor="message" className="active">
                    Last name
                    </label>
                </div>
            </div>
            </div>
            <div className="modal-footer">
                <a href="#1" onClick={onSubmit} className="modal-close waves-effect waves-light btn  ">Enter</a>
            </div>
        </div>
    )
}

 
 

export default Addtech
