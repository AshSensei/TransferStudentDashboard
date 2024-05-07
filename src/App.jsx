import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LoginPage from "./routes/LoginPage"
import LandingPage from "./routes/LandingPage"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Landing Page</Link>
                    </li>
                    <li>
                      <Link to="/login">Login Page</Link>
                    </li>
                  </ul>
                </nav>
                <LandingPage />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
