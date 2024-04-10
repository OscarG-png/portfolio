import Contact from './pages/Contact';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav>
            <div className="flex flex-row gap-5">
                <Link to="/portfolio">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Contact />
            </div>
        </nav>
    );
}
