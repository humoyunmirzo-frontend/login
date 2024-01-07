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
            <Fade triggerOnce >
                <div className="flex items-center gap-3">
                <a href="#"  rel="noreferrer" className="text-[#fff] underline-none">Products</a>
                <a href="#"  rel="noreferrer" className="text-[#fff] underline-none">Services</a>
                <a href="#"  rel="noreferrer" className="text-[#fff] underline-none">About Us</a>
                <a href="#"  rel="noreferrer" className="text-[#fff] underline-none">Contact</a>
                </div>
            </Fade>
            <Slide direction='right' triggerOnce>[#fff]
                <Link to={token ? "/dashboard":"../login"} className="px-3 py-1 rounded-[4px] text-[#fff] bg-secondary">Kirish</Link>
            </Slide>
        </header>
    )
}
