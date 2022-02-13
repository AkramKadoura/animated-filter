import { motion } from 'framer-motion';

const Movie = (props) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <h2>{props.movie.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w400' + props.movie.backdrop_path} alt='' />
        </motion.div>
    )
}

export default Movie