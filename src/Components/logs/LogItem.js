import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { delLog } from '../../actions/getLogs'
import { connect } from 'react-redux'
import {setCurrent} from '../../actions/getLogs'

 
const LogItem = ({ log,delLog,setCurrent }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={()=>setCurrent(log)} >{log.message}</a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span>{' '} last updated by {' '}
                    <span className="span black-text">{log.tech}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a href="!#" className="secondary-content" onClick={()=>delLog(log.id)} >
                <i className="material-icons grey-text">delete</i> 
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
 log:PropTypes.object.isRequired
}

export default connect(null,{delLog,setCurrent})(LogItem)
