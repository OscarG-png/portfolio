import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './NavMenu';
import HomePage from './pages/HomePage';
import AboutMe from './pages/Aboutme';

function App() {
    return (
        <>
            <NavMenu />
            <div className="container mx-auto">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
