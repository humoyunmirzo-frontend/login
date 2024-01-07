import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const token = localStorage.getItem('access_token')
      const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('access_token')
    navigate('/login')
  }
    return (
        <header className='flex items-center justify-between px-10 py-5 text-white bg-primary'>
            <Slide direction='left' triggerOnce >
                <Link className="text-[24px] text-[#fff] font-bold" to="/">
                    Logo
                </Link>
            </Slide>
         
            <Slide direction='right' triggerOnce>
            <button onClick={()=> logout()} className="px-3 py-1 w-full rounded-md bg-danger text-[#fff]">
      Chiqish
    </button>
            </Slide>
        </header>
    )
}
