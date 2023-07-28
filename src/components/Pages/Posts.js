import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Posts() {
  return (
    <div className='container mt-4'>
        <ul className='nav justify-content-center'>
            <li className='nav-item active'>
                <Link className='nav-link' to="latest">Latest</Link>
            </li>
            <li className='nav-item active'>
                <Link className='nav-link' to="oldest">Oldest</Link>
            </li>  <li className='nav-item active'>
                <Link className='nav-link' to="liked">Liked</Link>
            </li>  <li className='nav-item active'>
                <Link className='nav-link' to="disliked">Disliked</Link>
            </li>
        </ul>

        <Outlet/>
    </div>
  )
}
