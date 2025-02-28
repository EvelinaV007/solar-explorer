import clsx from "clsx";
import { motion } from "framer-motion";

export const PlanetList = ({selectedPlanet, planets, handlerSelectPlanet }) => {
  

    return (
      <div className="planet-list">
          {planets.map((planet) => (
              <motion.div
                  key={planet.name}
                  className={clsx("planet-item", planet.name === selectedPlanet.name && "active")}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handlerSelectPlanet(planet)}
              >
                  {planet.name}
              </motion.div>
          ))}
      </div>
  )
}
