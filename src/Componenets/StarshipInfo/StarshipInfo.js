import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const StarshipInfo = () => {

    const {slug} = useParams()
    const [starships, setStarships] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/starships/${slug}`)
            .then((res) => {
                setStarships(res.data)
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='infoBlock'>
            <div className='infoImg'>
                <img src={`https://starwars-visualguide.com/assets/img/starships/${slug}.jpg`} alt="" className="elementImg"/>
            </div>
            <div className='info'>
                <h2>{starships.name}</h2>
                <ul>
                    <li><b>Model: </b>{starships.model}</li>
                    <li><b>Manufacturer: </b>{starships.manufacturer}</li>
                    <li><b>Class: </b>{starships.starship_class}</li>
                    <li><b>Cost: </b>{starships.cost_in_credits}</li>
                    <li><b>Speed: </b>{starships.max_atmosphering_speed}</li>
                    <li><b>Hyperdrive Rating: </b>{starships.hyperdrive_rating}</li>
                    <li><b>MGLT: </b>{starships.MGLT}</li>
                    <li><b>Length: </b>{starships.length}</li>
                    <li><b>Cargo Capacity: </b>{starships.cargo_capacity} kg</li>
                    <li><b>Mimimum Crew: </b>{starships.crew}</li>
                    <li><b>Passengers: </b>{starships.passengers}</li>
                </ul>
            </div>
        </div>
    );
};

export default StarshipInfo;