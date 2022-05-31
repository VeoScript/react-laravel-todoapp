import React from 'react'

const Button = (props) => {

  const {
    title,
    type,
    icon,
    className,
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
      {icon}
      {title}
    </button>
  )
}

export default Button