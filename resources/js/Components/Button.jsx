import React from 'react'

const Button = (props) => {

  const {
    className,
    title,
    type,
    onClick
  } = props

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button