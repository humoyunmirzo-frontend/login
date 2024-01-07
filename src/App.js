import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index'
import Login from './Pages/Login/index'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Dashboard from './Pages/Dashboard/index'
import Page404 from './Pages/404/index'
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
