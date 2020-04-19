import React, { useEffect } from 'react'
import LogItem from './LogItem'
import Loading from '../layouts/Loading'
import { getLog } from '../../actions/getLogs'
import { connect } from 'react-redux'
import Proptypes from 'prop-types' 
 
const Logs = ({getLog,log:{logs,loading},}) => {
    // const [logs, setLogs] = useState([])
    // const [loading, setLoading] = useState(false)
    useEffect(() => {
        getLog()
        // eslint-disable-next-line
    }, [])
    // const getLogs = async () => {
    //     const res=await fetch('/logs')
    //     const result=await res.json()
    //     setLogs(result)
    //     setLoading(true)
        
    // } 
    if (loading || logs.length===0) {
        return <Loading/>
    }
   
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
                
            </li>
            {!loading && logs.map(log => (
                <LogItem log={log} key={log.id}/>
            ))}
        </ul>
    )
}
Logs.propTypes = {
    log: Proptypes.object.isRequired,
    loading:Proptypes.bool.isRequired
}
const map = state => ({
    log:state.log
})

export default connect(map,{getLog})(Logs)
