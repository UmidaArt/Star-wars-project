import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const FilmInfo = () => {

    const {slug} = useParams()
    const [film, setFilm] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/films/${slug}`)
            .then((res) => {
                setFilm(res.data)
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div className='infoBlock'>
            <div className='infoImg'>
                <img src={`https://starwars-visualguide.com/assets/img/films/${slug}.jpg`} alt="" className="elementImg"/>
            </div>
            <div className='info'>
                <h2>{film.title}</h2>
                <ul>
                    <li><b>Date Created : </b>{film.release_date}</li>
                    <li><b>Director: </b>{film.director}</li>
                    <li><b>Producer(s): </b>{film.producer}</li>
                    <li><b>Opening Crawl: </b>{film.opening_crawl}</li>
                </ul>
            </div>

        </div>
    );
};

export default FilmInfo;