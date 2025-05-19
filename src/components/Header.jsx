import React from 'react'

const Header = ({text, style, className}) => {
  return (
    <h1 className={className} style={style}>
      {text}
    </h1>
  )
}

export default Header
