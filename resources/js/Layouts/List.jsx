import React from 'react'
import Button from '@/Components/Button'
import Spinner from '@/Components/Spinner'
import axios from 'axios'
import { Link } from '@inertiajs/inertia-react'
import { RiCheckFill, RiCheckDoubleFill, RiDeleteBinLine } from 'react-icons/ri'

const List = ({ props }) => {
  return (
    <ul className="flex flex-col w-full h-full max-h-[20rem] overflow-y-auto rounded-md bg-[#FFFFFF]">
      {props === undefined && (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
          <Spinner
            color="#0A6AF3"
            width={40}
            height={40}
          />
          <span>Loading...</span>
        </div>
      )}
      {props?.tasks.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
          <p>Add you first task...</p>
          <Link
            href="/new"
            className="w-[6rem] p-2 rounded-md text-center text-xs text-white bg-[#0243eb] transition ease-in-out duration-200 hover:bg-opacity-50"
          >
            New Task
          </Link>
        </div>
      )}
      {props?.tasks.map((task) => (
        <li
          key={task.id}
          className={`flex flex-row items-center justify-between w-full p-5
            ${task.status === 'Done' ? 'bg-[#F7F9FB]' : 'bg-[#FFFFFF]'}
            border-b border-zinc-100 transition ease-in-out duration-200 hover:bg-opacity-50`
          }
        >
          <div className="relative flex flex-row items-center justify-start space-x-1">
            <p>{ task.task }</p>
            <p className={`flex px-1 rounded-md text-center text-xs text-white ${task.type === 'Priority' ? 'bg-[#1A4689]' : 'bg-[#8D54FF]'}`}>
              { task.type }
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              className={`flex items-center justify-center w-[4rem] p-1 space-x-2 rounded-md text-xs ${task.status === 'Done' ? 'border border-[#0A6AF3] bg-none text-[#0A6AF3]' : 'text-white bg-[#0A6AF3]'} transition ease-in-out duration-200 hover:bg-opacity-50`}
              title={task.status === 'Done' ? 'Undone' : 'Done'}
              type="button"
              icon={task.status === 'Done' ? <RiCheckDoubleFill className="w-4 h-4 text-[#0A6AF3]" /> : <RiCheckFill className="w-4 h-4 text-white" />}
              onClick={async () => {
                await axios.put(`/update-task/${task.id}`, {
                  status: `${ task.status === 'Done' ? 'Undone' : 'Done' }`
                })
              }}
            />
            <Button
              className="flex items-center justify-center w-[4rem] p-1 space-x-2 rounded-md text-xs text-white bg-[#E94A4E] transition ease-in-out duration-200 hover:bg-opacity-50"
              title="Delete"
              type="button"
              icon={<RiDeleteBinLine className="w-4 h-4 text-white" />}
              onClick={async () => {
                await axios.delete(`/delete-task/${task.id}`)
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List