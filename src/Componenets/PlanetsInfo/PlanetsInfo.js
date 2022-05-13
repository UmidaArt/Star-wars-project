import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {useParams} from "react-router-dom";

const PlanetsInfo = () => {

    const {slug} = useParams()
    const [planet, setPlanet] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/planets/${slug}`)
            .then((res) => {
                setPlanet(res.data)
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='infoBlock'>
            <div className='infoImg'>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${slug}.jpg`} alt="" className="elementImg"/>
            </div>
            <div className='info'>
                <h2>{planet.name}</h2>
                <ul>
                    <li><b>Population: </b>{planet.population}</li>
                    <li><b>Rotation Period: </b>{planet.rotation_period}</li>
                    <li><b>Orbital Period: </b>{planet.orbital_period}</li>
                    <li><b>Diameter: </b>{planet.diameter}</li>
                    <li><b>Gravity: </b>{planet.gravity}</li>
                    <li><b>Terrain: </b>{planet.terrain}</li>
                    <li><b>Surface Water: </b>{planet.surface_water}</li>
                    <li><b>Climate: </b>{planet.climate}</li>
                </ul>
            </div>
        </div>
    );
};

export default PlanetsInfo;