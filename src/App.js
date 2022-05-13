import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Componenets/HomePage";
import Species from "./Componenets/Species";
import Characters from "./Componenets/Characters";
import Films from "./Componenets/Films";
import Planets from "./Componenets/Planets";
import Starship from "./Componenets/Starship";
import Vehicles from "./Componenets/Vehicles";
import Header from "./Componenets/Header";
import CharactersInfo from "./Componenets/CharactersInfo";
import FilmInfo from "./Componenets/FilmInfo";
import PlanetsInfo from "./Componenets/PlanetsInfo";
import SpeciesInfo from "./Componenets/SpeciesInfo"
import StarshipInfo from "./Componenets/StarshipInfo"
import VehiclesInfo from "./Componenets/VehiclesInfo"


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/characters" element={<Characters />}/>
                    <Route path="/characters/:slug" element={<CharactersInfo />}/>
                    <Route path="/species" element={<Species />}/>
                    <Route path="/species/:slug" element={<SpeciesInfo />}/>
                    <Route path="/films" element={<Films />}/>
                    <Route path="/films/:slug" element={<FilmInfo />}/>
                    <Route path="/planets" element={<Planets />}/>
                    <Route path="/planets/:slug" element={<PlanetsInfo />}/>
                    <Route path="/starship" element={<Starship />}/>
                    <Route path="/starships/:slug" element={<StarshipInfo />}/>
                    <Route path="/vehicles" element={<Vehicles />}/>
                    <Route path="/vehicles/:slug" element={<VehiclesInfo />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;