import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './NavMenu';
import HomePage from './pages/HomePage';
import AboutMe from './pages/Aboutme';
import Projects from './pages/ProjectsPage';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { ModeToggle } from '@/components/mode-toggle';

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <div className="flex flex-row justify-between mx-5 my-5">
                    <NavMenu />
                    <ModeToggle />
                </div>
                <div className="container mx-auto">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
