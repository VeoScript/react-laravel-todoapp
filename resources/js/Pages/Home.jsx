import React from 'react'
import Main from '@/Layouts/Main'
import NavBar from '@/Components/NavBar'
import List from '@/Layouts/List'
import axios from 'axios'
import { Head } from '@inertiajs/inertia-react'

export default function Home() {

  const [displayTodos, setDisplayTodos] = React.useState([])

  const loadTodosDataCallback = React.useCallback(async () => {
    try {
      const todos = await axios.get('/show-task')
      setDisplayTodos(todos)
    } catch (err) {
      console.error(err)
    }
  }, [])

  React.useEffect(() => {
    setInterval(() => loadTodosDataCallback(), 1000)
    return () => {
      setDisplayTodos([])
    }
  }, [loadTodosDataCallback, setDisplayTodos])

  return (
    <>
      <Head>
        <title>My List</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-default">
        <Main>
          <NavBar />
          <List props={displayTodos.data} />
        </Main>
      </div>
    </>
  )
}
