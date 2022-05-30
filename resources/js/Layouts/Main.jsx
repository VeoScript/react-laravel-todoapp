import React from 'react'

const Main = ({ children }) => {
  return (
    <div className="flex flex-col w-full max-w-xl space-y-5">
      {children}
    </div>
  )
}

export default Main