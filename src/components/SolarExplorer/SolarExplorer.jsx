import { useState } from "react";

import { planets } from "../../_db";

import "./SolarExplorer.scss";

import { PlanetList } from "./PlanetList/PlanetList";
import { PlanetImg } from "./PlanetImg/PlanetImg";
import { PlanetDescription } from "./PlanetDescription/PlanetDescription";

export const SolarExplorer = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(planets[2]);

    const handlerSelectPlanet = (planet) => {
        setSelectedPlanet(planet)
    }

    return (
        <div className="solar-explorer">
            <PlanetList
                selectedPlanet={selectedPlanet}
                planets={planets}
                handlerSelectPlanet={handlerSelectPlanet}
            />
            <div className="main-scene">
                <PlanetImg planet={selectedPlanet}/>
                <PlanetDescription planet={selectedPlanet}/>
            </div>
        </div>
    );
};
