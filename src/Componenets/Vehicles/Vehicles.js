import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Vehicles = () => {

    const [vehicles, setVehicles] = useState({})
    const [vehiclesPage, setVehiclesPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios(`https://swapi.dev/api/vehicles?page=${vehiclesPage}`)
            .then((res) => {
                setVehicles(res.data)
                setIsLoading(false)
            })
    }, [vehiclesPage])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(vehicles.count/10)).fill(0).map((buttonNam, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setVehiclesPage(idx + 1)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className='row'>
                {
                    vehicles.results.map((cars, index) => (
                        <div key={index} className='col-4'>
                            <Link to={`/vehicles/${10 * vehiclesPage + index + 1}`}>
                                <div className="elementItem">
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${10 * vehiclesPage + index + 1}.jpg`} alt="" className="elementImg"/>
                                    <h2>{cars.name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Vehicles;