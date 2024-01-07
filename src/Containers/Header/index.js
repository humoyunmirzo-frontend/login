import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

export default function Header() {
    const token = localStorage.getItem('access_token')
    return (
        <header className='flex items-center justify-between px-10 py-5 text-white bg-primary'>
            <Slide direction='left' triggerOnce >
                <Link className="text-[24px] text-[#fff] font-bold" to="/">
                    Logo
                </Link>
            </Slide>
         
            <Slide direction='right' triggerOnce>[#fff]>
            Admin ismi
            </Slide>
        </header>
    )
}
