import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import './CharactersInfo.css'

const CharactersInfo = () => {

    const {slug} = useParams()
    const [characters, setCharacters] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/people/${slug}`)
            .then((res) => {
                setCharacters(res.data)
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='infoBlock'>
            <div className='infoImg'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${slug}.jpg`} alt="" className="elementImg"/>
            </div>
            <div className='info'>
                <h2>{characters.name}</h2>
                <ul>
                    <li><b>Birth Year: </b>{characters.birth_year}</li>
                    <li><b>Height: </b>{characters.height}</li>
                    <li><b>Mass: </b>{characters.mass}</li>
                    <li><b>Gender: </b>{characters.gender}</li>
                    <li><b>Hair Color: </b>{characters.hair_color}</li>
                    <li><b>Skin Color: </b>{characters.skin_color}</li>
                </ul>
            </div>
        </div>
    );
};

export default CharactersInfo;