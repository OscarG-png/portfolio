import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './NavMenu';
import HomePage from './pages/HomePage';
import AboutMe from './pages/Aboutme';
import { ThemeProvider } from '@/components/theme-provider.tsx';

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <NavMenu />
                <div className="container mx-auto">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
