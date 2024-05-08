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
import RegisterPage from "./routes/RegisterPage"
import ChecklistPage from "./routes/ChecklistPage"

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
                <LandingPage />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
