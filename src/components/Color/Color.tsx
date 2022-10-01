import React from 'react'
import color from '../../interfaces/color'

interface ColorProps{
    color:color
}

export const Color = (props:ColorProps) => {
    const {color} = props
  return (
    <div className="test2 mx-sm-3 text-center">
    <img
      src={color.imgSrc}
      className="rounded "
      alt={color.text}
    />
    <p>{color.text}</p>
  </div>
  )
}
