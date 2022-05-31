import React from 'react'
import Button from '@/Components/Button'
import { useForm } from '@inertiajs/inertia-react'

const AddTask = () => {

  const { data, setData, post, processing, reset, errors } = useForm()

  const onAddTask = async (e) => {
    e.preventDefault()
    await post('/add-task', {
      onSuccess: () => reset()
    })
  }

  return (
    <form onSubmit={onAddTask} className="flex flex-col items-center w-full p-3 space-y-5 bg-white">
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          className="w-full p-3 rounded-md border border-[#D9E9FB] outline-none"
          value={data.task}
          onChange={e => setData('task', e.target.value)}
          required
        />
        {errors.task && <span>Task is required!</span>}
      </div>
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="type">Type of task</label>
        <select
          type="text"
          id="type"
          className="w-full p-3 cursor-pointer rounded-md border border-[#D9E9FB] outline-none"
          value={data.type}
          onChange={e => setData('type', e.target.value)}
          required
        >
          <option value=""></option>
          <option value="Priority">Priority</option>
          <option value="Urgent">Urgent</option>
        </select>
        {errors.type && <span>Type is required!</span>}
      </div>
      <div className="flex items-center justify-end w-full">
        {processing && (
          <div className="w-[6rem] p-2 rounded-md text-base text-white bg-[#0A6AF3]">
            Loading...
          </div>
        )}
        {!processing && (
          <Button
            className="w-[6rem] p-2 rounded-md text-base text-white bg-[#0A6AF3] transition ease-in-out duration-200 hover:bg-opacity-50"
            title="Add"
            type="submit"
            disabled={processing}
          />
        )}
      </div>
    </form>
  )
}

export default AddTask