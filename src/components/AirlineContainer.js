import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../constraints'
import Airline from './Airline'


export default function AirlineContainer() {

    const [airlines, setAirlines] = useState(null)
    //READ

    useEffect(() => {
        fetch(BASE_URL + 'airlines')
        .then(res => res.json())
        .then(json => setAirlines(json))
    }, [])

   function populateAirlines() {
       console.log(airlines)
       return airlines.map(airline => <Airline airline={airline} key={airline.id}/>)
   }
   return (
    <div>
        {airlines && populateAirlines()}
    </div>
)
}

