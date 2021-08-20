import React from 'react'
import { Link } from 'react-router-dom'

export default function Airline({airline}) {
    
    return (
        <div>
            <br />
            <Link to={`/airlines/${airline.id}`}><p>{airline.name}</p></Link>
            <p>{airline.img_url}</p>
            
        </div>
    )
}

