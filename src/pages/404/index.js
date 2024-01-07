import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="h-[100vh] grid place-items-center bg-primary text-white">
      <div className="flex flex-col gap-3 items-start">
        <div className="text-[28px] text-[#fff]">404</div>
        <div className="text-[28px] text-[#fff]">Oops...</div>
        <Link to="/" className="text-[#fff]">Bosh sahifa</Link>
      </div>
    </div>
  )
}
