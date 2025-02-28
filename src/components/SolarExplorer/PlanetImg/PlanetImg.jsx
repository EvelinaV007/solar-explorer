import { motion } from "framer-motion";

export const PlanetImg = ({ planet }) => {
    const { name, image } = planet
    return (
        <>
            <motion.img
                key={name}
                src={image}
                alt={name}
                className="planet-image"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
        </>
    )
}
