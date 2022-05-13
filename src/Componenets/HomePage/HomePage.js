import React from 'react';
import {Link} from "react-router-dom";
import './HomePage.css'
import character from '../../assets/images/character.jpeg'
import films from '../../assets/images/films.jpeg'
import planets from '../../assets/images/planets.jpeg'
import species from '../../assets/images/species.jpeg'
import starship from '../../assets/images/starships.jpeg'
import vehicles from '../../assets/images/vehicles.jpeg'

const HomePage = () => {
    return (
        <div className='row'>
            <div className="col-4">
                <Link to="/characters">
                    <div className="categoryItem">
                        <img src={character} alt='characters'/>
                    </div>
                    <div className="title">
                        <h2 className="character">Characters</h2>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/films">
                    <div className="categoryItem">
                        <img src={films} alt='films'/>
                    </div>
                    <div className="title">
                        <h2 className="films">Films</h2>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/species">
                    <div className="categoryItem">
                        <img src={species} alt='species'/>
                    </div>
                    <div className="title">
                        <h2 className="species">Species</h2>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/starship">
                    <div className="categoryItem">
                        <img src={starship} alt='starship'/>
                    </div>
                    <div className="title">
                        <h2 className="starship">Starships</h2>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/vehicles">
                    <div className="categoryItem">
                        <img src={vehicles} alt='vehicles'/>
                    </div>
                    <div className="title">
                        <h2 className="vehicles">Vehicles</h2>
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/planets">
                    <div className="categoryItem">
                        <img src={planets} alt='planets'/>
                    </div>
                    <div className="title">
                        <h2 className="planets">Planets</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;