import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Planets = () => {

    const [planets, setPlanets] = useState({})
    const [planetsPage, setPlanetsPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/planets?page=${planetsPage + 1}`)
            .then((res) => {
                setPlanets(res.data)
                setIsLoading(false)
            })
    }, [planetsPage])

    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(planets.count/10)).fill(0).map((buttonNam, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setPlanetsPage(idx + 1)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className='row'>
                {
                    planets.results.map((planet, index) => (
                        <div key={index} className='col-4'>
                            <Link to={`/planets/${index + 1}`}>
                                <div className="elementItem">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${10 * planetsPage + index + 1}.jpg`} alt="" className="elementImg"/>
                                    <h2>{planet.name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Planets;