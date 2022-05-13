import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const SpeciesInfo = () => {

    const {slug} = useParams()
    const [species, setSpecies] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/species/${slug}`)
            .then((res) => {
                setSpecies(res.data)
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='infoBlock'>
            <div className='infoImg'>
                <img src={`https://starwars-visualguide.com/assets/img/species/${slug}.jpg`} alt="" className="elementImg"/>
            </div>
            <div className='info'>
                <h2>{species.name}</h2>
                <ul>
                    <li><b>Classification: </b>{species.classification}</li>
                    <li><b>Designation: </b>{species.designation}</li>
                    <li><b>Language: </b>{species.language}</li>
                    <li><b>Avg Lifespan: </b>{species.average_lifespan}</li>
                    <li><b>Avg Height: </b>{species.average_height}</li>
                    <li><b>Hair Color(s): </b>{species.hair_colors}</li>
                    <li><b>Skin Color(s): </b>{species.skin_colors}</li>
                    <li><b>Eye Color(s): </b>{species.eye_colors}</li>
                </ul>
            </div>
        </div>
    );
};

export default SpeciesInfo;