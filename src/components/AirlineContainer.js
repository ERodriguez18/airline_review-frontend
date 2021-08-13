import React, {useEffect, useState} from 'react';
import BASE_URL from '../constraints/index.js';


export default function AirlineContainer() {

    const [airlines, setAirlines] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'Airlines')
        .then(res => res.json())
        .then(json => setAirlines(json))
    }, [])

    useEffect(() => {
        console.log("Airlines: ")
        console.log(airlines)
    }, [airlines])

    return (
        <div>

        </div>
    )
}