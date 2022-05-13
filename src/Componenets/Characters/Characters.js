import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Characters = () => {
    const [characters, setCharacters] = useState({})
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://swapi.dev/api/people?page=${page + 1}`)
            .then((res) => {
                setCharacters(res.data)
                setIsLoading(false)
            })
    }, [page])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(characters.count/10)).fill(0).map((buttonNam, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setPage(idx)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className='row'>
                {
                    characters.results.map((people, index) => (
                        <div key={index} className='item-col'>
                            <Link to={`/characters/${10 * page + index + 1}`}>
                                <div className="elementItem">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${10 * page + index + 1}.jpg`} alt="" className="elementImg"/>
                                    <h2>{people.name}{10 * page + index + 1}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Characters;