import { Button } from '@/components/ui/button';
import { Github } from '../components/icons/Github';
import { Gitlab } from '../components/icons/Gitlab';
import { Linkedin } from '../components/icons/Linkedin';
import { Leetcode } from '../components/icons/Leetcode';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';

export default function HomePage() {
    const resumeURL =
        'https://drive.google.com/file/d/1rSLPJtaiFng3bLktbIf4GT7x5kLRMg_6/view?usp=sharing';
    return (
        <>
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                exit={{ opacity: 1 }}
                className="flex flex-col items-center h-screen gap-10 mt-20"
            >
                <div className="gap2">
                    <h1 className="justify-center text-4xl" aria-label="name">
                        Oscar Gamez
                    </h1>
                    <p className="text-center">Fullstack Developer</p>
                </div>
                <img
                    alt="profile"
                    src="https://i.imgur.com/zRkIc9y.jpeg"
                    className="justify-center rounded-full w-30 h-30"
                    aria-label="profile picture"
                />
                <div className="flex flex-row gap-4">
                    <a href="https://www.linkedin.com/in/oscarrgamez/">
                        <Linkedin aria-label="Linkedin link" />
                    </a>
                    <a href="https://www.github.com/OscarG-PNG">
                        <Github aria-label="github link" />
                    </a>
                    <a href="https://www.gitlab.com/OscarG">
                        <Gitlab aria-label="gitlab link" />
                    </a>
                    <a href="https://leetcode.com/OscarGamez/">
                        <Leetcode aria-label="leetcode link" />
                    </a>
                </div>
                <a href={resumeURL}>
                    <Button>Download Resume</Button>
                </a>
                <div className="flex flex-col gap-10 sm:flex-row">
                    <Skills />
                </div>
            </motion.div>
        </>
    );
}
