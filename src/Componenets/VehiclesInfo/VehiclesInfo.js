import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const VehiclesInfo = () => {

    const {slug} = useParams()
    const [vehicles, setVehicles] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/vehicles/${slug}`)
            .then((res) => {
                setVehicles(res.data)
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='infoBlock'>
            <div className='infoImg'>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${slug}.jpg`} alt="" className="elementImg"/>
            </div>
            <div className='info'>
                <h2>{vehicles.name}</h2>
                <ul>
                    <li><b>Model: </b>{vehicles.model}</li>
                    <li><b>Manufacturer: </b>{vehicles.manufacturer}</li>
                    <li><b>Class: </b>{vehicles.vehicle_class}</li>
                    <li><b>Cost: </b>{vehicles.cost_in_credits}</li>
                    <li><b>Speed: </b>{vehicles.max_atmosphering_speed}</li>
                    <li><b>Length: </b>{vehicles.length}</li>
                    <li><b>Cargo Capacity: </b>{vehicles.cargo_capacity}</li>
                    <li><b>Minimum Crew: </b>{vehicles.crew}</li>
                    <li><b>Passengers: </b>{vehicles.passengers}</li>
                </ul>
            </div>
        </div>
    );
};

export default VehiclesInfo;