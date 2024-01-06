import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Page404 from './pages/404'
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
    </>
  )
}
