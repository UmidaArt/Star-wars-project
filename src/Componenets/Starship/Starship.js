import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Starship = () => {

    const [starships, setStarships] = useState({})
    const [starshipsPage, setStarshipsPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/starships?page=${starshipsPage}`)
            .then((res) => {
                setStarships(res.data)
                setIsLoading(false)
            })
    }, [starshipsPage])

    if (isLoading) {
        return <Spinner/>
    }


    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(starships.count/10)).fill(0).map((buttonNam, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setStarshipsPage(idx + 1)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className='row'>
                {
                    starships.results.map((starCar, index) => (
                        <div key={index} className='col-4'>
                            <Link to={`/starships/${index + 1}`}>
                                <div className="elementItem">
                                    <img src={`https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`} alt="" className="elementImg"/>
                                    <h2>{starCar.name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Starship;