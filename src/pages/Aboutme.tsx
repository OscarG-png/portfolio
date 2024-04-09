import { aboutMe } from '../Data/AboutMe';
import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-screen gap-5"
        >
            <h1 className="text-4xl">About me</h1>
            <p>{aboutMe}</p>
        </motion.div>
    );
}
