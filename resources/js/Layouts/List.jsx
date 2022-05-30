import React from 'react'
import Button from '@/Components/Button'
import { Link } from '@inertiajs/inertia-react'
import { data } from '@/Mock/fake'

const List = () => {
  return (
    <ul className="flex flex-col w-full bg-[#FFFFFF]">
      {data.map((data) => (
        <li className="flex flex-row items-center justify-between w-full p-5 cursor-pointer transition ease-in-out duration-200 hover:bg-info focus-within::ring focus-within::ring-[#0A6AF3] ">
          <Link
            className="flex"
            href="/"
          >
            { data.title }
          </Link>
          <div className="flex-items-center space-x-2">
            <Button
              className="w-[6rem] p-2 rounded-md text-xs text-white bg-[#0A6AF3]"
              title="Done"
              type="button"
              onClick={() => {
                console.log('This is Done Button')
              }}
            />
            <Button
              className="w-[6rem] p-2 rounded-md text-xs text-white bg-[#E94A4E]"
              title="Delete"
              type="button"
              onClick={() => {
                console.log('This is Delete Button')
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List