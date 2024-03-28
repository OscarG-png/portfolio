import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavMenu from "./NavMenu"
import HomePage from "./HomePage"

function App() {

  return (
    <>
      <NavMenu />
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
