import React from 'react'
 
const TechItem = ({tech:{fname,lname}}) => {
    return (
        <li className="collection-item">
            <div>
           {fname}{''}{lname}
                <a href="!#" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
          </a>
        </div> 
    </li>
    )
}

 

export default TechItem
