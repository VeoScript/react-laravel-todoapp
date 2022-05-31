import React from 'react'
import Main from '@/Layouts/Main'
import NavBar from '@/Components/NavBar'
import AddTask from '@/Layouts/AddTask'
import { Link, Head } from '@inertiajs/inertia-react'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>New Task</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-default">
        <Main>
          <NavBar />
          <AddTask />
        </Main>
      </div>
    </>
  )
}
