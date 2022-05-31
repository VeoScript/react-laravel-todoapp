import React from 'react'

const Button = (props) => {

  const {
    className,
    title,
    type,
    onClick,
    disabled
  } = props

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button