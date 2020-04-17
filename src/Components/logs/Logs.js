import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import Loading from '../layouts/Loading'
 
 
const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
       getLogs()
    }, [])
    const getLogs = async () => {
        const res=await fetch('/logs')
        const result=await res.json()
        setLogs(result)
        setLoading(true)
        
    } 
    if (!loading) {
        return <Loading/>
    }
   
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
                
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs to show</p>) : (logs.map(log => (
                <LogItem log={log} key={log.id}/>
            )))}
        </ul>
    )
}


export default Logs
