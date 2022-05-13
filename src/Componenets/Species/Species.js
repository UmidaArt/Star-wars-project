import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Species = () => {

    const [species, setSpecies] = useState({})
    const [speciesPage, setSpeciesPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/species?page=${speciesPage}`)
            .then((res) => {
                setSpecies(res.data)
                setIsLoading(false)
            })
    }, [speciesPage])

    if (isLoading) {
        return <Spinner/>
    }


    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(species.count/10)).fill(0).map((btnSpecies, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setSpeciesPage(idx + 1)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className='row'>
                {
                    species.results.map((item, index) => (
                        <div key={index} className='col-4'>
                            <Link to={`/species/${10 * speciesPage + index + 1}`}>
                                <div className="elementItem">
                                    <img src={`https://starwars-visualguide.com/assets/img/species/${10 * speciesPage + index + 1}.jpg`} alt="" className="elementImg"/>
                                    <h2>{item.name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Species;