import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Landing from './pages/Landing.jsx';
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import TrainerDashboard from "./pages/TrainerDashboard.jsx";
import FollowedTrainers from './pages/FollowedTrainers.jsx';
import ProtectedRoute from "./routes/Protectedroutes.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
          path="/trainers"
          element={
            <ProtectedRoute role="user">
              <FollowedTrainers />
            </ProtectedRoute>
          }
        />


      <Route
        path="/trainer"
        element={
          <ProtectedRoute role="trainer">
            <TrainerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App
