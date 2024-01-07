import React from 'react'
import Header from '../../Containers/Header'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('access_token')
    navigate('/login')
  }
  return (
    <>
    <Header/>
    <button onClick={()=> logout()} className="px-3 py-1 w-full rounded-md bg-danger text-[#fff]">
      Chiqish
    </button>
    </>
  )
}
