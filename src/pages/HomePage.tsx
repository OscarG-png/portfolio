import { Button } from '@/components/ui/button';
import { Github } from '../components/icons/Github';
import { Gitlab } from '../components/icons/Gitlab';
import { Linkedin } from '../components/icons/Linkedin';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomePage() {
    const resumeURL =
        'https://drive.google.com/file/d/1rSLPJtaiFng3bLktbIf4GT7x5kLRMg_6/view?usp=sharing';
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center h-screen gap-10 mt-20"
            >
                <h1 className="justify-center text-4xl">Oscar Gamez</h1>
                <img
                    alt="profile"
                    src="https://media.licdn.com/dms/image/C5603AQGjSlrn_aPRpQ/profile-displayphoto-shrink_800_800/0/1559333015269?e=1717027200&v=beta&t=NW1fims2R9eHULQL8mzDxNtqMMg6DGVTkxIN2fJHqqc"
                    className="justify-center rounded-full w-30 h-30"
                />
                <div className="flex flex-row gap-4">
                    <Link to="https://www.linkedin.com/in/oscarrgamez/">
                        <Linkedin />
                    </Link>
                    <Link to="https://www.github.com/OscarG-PNG">
                        <Github />
                    </Link>
                    <Link to="https://www.gitlab.com/OscarG">
                        <Gitlab />
                    </Link>
                </div>
                <Link to={resumeURL}>
                    <Button>Download Resume</Button>
                </Link>
            </motion.div>
        </>
    );
}
