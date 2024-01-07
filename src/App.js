import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Page404 from './pages/404'
import Login from './pages/login'
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
    </>
  )
}
