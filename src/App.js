import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Page404 from './Pages/404'
import ProtectedRoutes from './Components/ProtectedRoutes'
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
