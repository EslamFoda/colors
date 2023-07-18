import React from 'react'
interface ButtonProps {
    test:string
}

function Button({test}:ButtonProps) {
  return (
    <div>{test}</div>
  )
}

export default Button