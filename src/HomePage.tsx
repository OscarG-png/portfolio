import { Github } from './components/icons/Github';
import { Gitlab } from './components/icons/Gitlab';
import { Linkedin } from './components/icons/Linkedin';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col items-center gap-2 mt-5 bg-green-200 ">
                <h1 className="justify-center">Oscar Gamez</h1>
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
            </div>
        </>
    );
}
