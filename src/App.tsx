import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './NavMenu';
import HomePage from './pages/HomePage';
import AboutMe from './pages/Aboutme';
import Projects from './pages/ProjectsPage';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { ModeToggle } from '@/components/mode-toggle';
import { AnimatePresence } from 'framer-motion';

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Router basename="/portfolio">
                <div className="flex flex-row justify-between gap-2 mx-5 my-5">
                    <NavMenu />
                    <ModeToggle />
                </div>
                <div className="container">
                    <AnimatePresence mode={'wait'}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
