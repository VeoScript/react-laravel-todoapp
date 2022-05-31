import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const NavBar = () => {
  const { pathname } = window.location
  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#0A6AF3]">
      <h1 className="font-bold text-xl text-default">
        {pathname === '/new' ? 'New Task' : 'Todo App'}
      </h1>
      {pathname === '/' && (
        <Link
          href="/new"
          className="w-[6rem] p-2 rounded-md text-center text-xs text-white bg-[#0243eb] transition ease-in-out duration-200 hover:bg-opacity-50"
        >
          New Task
        </Link>
      )}
      {pathname === '/new' && (
        <Link
          href="/"
          className="w-[6rem] p-2 rounded-md text-center text-xs text-white bg-[#0243eb] transition ease-in-out duration-200 hover:bg-opacity-50"
        >
          Return
        </Link>
      )}
    </div>
  )
}

export default NavBar