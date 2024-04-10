import { Button } from '@/components/ui/button';
import { Github } from '../components/icons/Github';
import { Gitlab } from '../components/icons/Gitlab';
import { Linkedin } from '../components/icons/Linkedin';
import { motion } from 'framer-motion';

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
                <h1 className="justify-center text-4xl">Oscar Gamez</h1>
                <img
                    alt="profile"
                    src="/Portfolio-picture.jpeg"
                    className="justify-center rounded-full w-30 h-30"
                />
                <div className="flex flex-row gap-4">
                    <a href="https://www.linkedin.com/in/oscarrgamez/">
                        <Linkedin />
                    </a>
                    <a href="https://www.github.com/OscarG-PNG">
                        <Github />
                    </a>
                    <a href="https://www.gitlab.com/OscarG">
                        <Gitlab />
                    </a>
                </div>
                <a href={resumeURL}>
                    <Button>Download Resume</Button>
                </a>
            </motion.div>
        </>
    );
}
