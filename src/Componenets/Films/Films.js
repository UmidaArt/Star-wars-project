import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import './Films.css'
import {Link} from "react-router-dom";

const Films = () => {

    const [films, setFilms] = useState({})
    const [filmPage, setFilmPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/films?page=${filmPage}`)
            .then((res) => {
                setFilms(res.data)
                setIsLoading(false)
            })
    }, [filmPage])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(films.count/10)).fill(0).map((buttonNamFilm, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setFilmPage(idx + 1)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className='row'>
                {
                    films.results.map((film, index) => (
                        <div key={index} className='col-4'>
                            <Link to={`/films/${10 * filmPage + index + 1}`}>
                                <div className="elementItem">
                                    <img src={`https://starwars-visualguide.com/assets/img/films/${10 * filmPage + index + 1}.jpg`} alt="" className="elementFilmImg"/>
                                    <h2>{film.title} {10 * filmPage + index + 1}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Films;