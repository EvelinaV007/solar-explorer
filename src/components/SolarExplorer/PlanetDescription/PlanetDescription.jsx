import { motion } from "framer-motion";

export const PlanetDescription = ({ planet }) => {
    const { name, size, description } = planet;
    
    return (
        <>
            <motion.div
                className="planet-info"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{name}</h2>
                <p>Size: {size}</p>
                <p>{description}</p>
            </motion.div>
        </>
    )
}
