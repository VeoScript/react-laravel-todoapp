import React from 'react'

const Main = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl h-full overflow-hidden p-3 space-y-3">
      {children}
    </div>
  )
}

export default Main