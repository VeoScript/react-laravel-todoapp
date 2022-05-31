import React from 'react'
import Button from '@/Components/Button'
import { useForm } from 'react-hook-form'

const AddTask = () => {

  const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm()

  const onAddTask = async (formData) => {
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onAddTask)} className="flex flex-col items-center w-full p-3 space-y-5 bg-white">
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          className="w-full p-3 rounded-md border border-[#D9E9FB] outline-none"
          {...register('task', { required: true })}
        />
        {errors.title && <span>Task is required!</span>}
      </div>
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="type">Type of task</label>
        <select
          type="text"
          id="type"
          className="w-full p-3 cursor-pointer rounded-md border border-[#D9E9FB] outline-none"
          {...register('type', { required: true })}
        >
          <option value=""></option>
          <option value="Priority">Priority</option>
          <option value="Urgent">Urgent</option>
        </select>
        {errors.type && <span>Task is required!</span>}
      </div>
      <Button
        className="w-[6rem] p-2 rounded-md text-base text-white bg-[#0A6AF3] transition ease-in-out duration-200 hover:bg-opacity-50"
        title="Add"
        type="submit"
      />
    </form>
  )
}

export default AddTask