import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'
 
 
 
const Techs = () => {
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getTechs()
    }, [])
    const getTechs = async () => {
        setLoading(true)
        const res=await fetch('/techs')
        const result=await res.json()
        setTechs(result)
        setLoading(false)
         
        
    } 
    
   
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.length !==0 && techs.map(tech => (   
                        <TechItem tech={tech} key={tech.id} />
                   ))}
                </ul>
            </div>
        </div>
    )
}


export default Techs
