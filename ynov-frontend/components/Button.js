import React from 'react'

const Button = React.forwardRef(({ label, onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        {label}
      </a>
    )
  })
export default Button