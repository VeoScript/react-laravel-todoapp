import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { RiAddLine, RiArrowGoBackLine } from 'react-icons/ri'

const NavBar = () => {

  const { pathname } = window.location

  return (
    <div className="flex items-center justify-between w-full p-4 rounded-md bg-[#0A6AF3]">
      <h1 className="font-bold text-xl text-default">
        {pathname === '/new' ? 'New Task' : 'Todo App'}
      </h1>
      {pathname === '/' && (
        <Link
          href="/new"
          className="p-1 rounded-full text-center text-xs text-[#D9E9FB] border-2 border-[#D9E9FB] transition ease-in-out duration-200 transform hover:scale-95"
        >
          <RiAddLine className="w-6 h-6" />
        </Link>
      )}
      {pathname === '/new' && (
        <Link
          href="/"
          className="p-1 rounded-full text-center text-xs text-[#D9E9FB] border-2 border-[#D9E9FB] transition ease-in-out duration-200 transform hover:scale-95"
        >
          <RiArrowGoBackLine className="w-6 h-6" />
        </Link>
      )}
    </div>
  )
}

export default NavBar