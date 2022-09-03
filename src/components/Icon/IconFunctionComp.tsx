import React from 'react'
import {useState}from 'react'
import {useTransition,animated} from "react-spring"
import { IconContext } from "react-icons";
import { is } from '@react-spring/shared';
interface IconProps {
    icon: IconType;
    size: string;
    color: string;
    className?: string;
    orientation?: string;
    text?: string;
    onHover?: boolean;
  }
  
  type IconType = (props: IconProps) => JSX.Element;
  

export const IconFunctionComp = (props:IconProps) => {
    const [isVisible,setIsVisible]= useState(false)
    const transition = useTransition(isVisible,{
        from:{opacity:0},
        enter:{opacity:1},
        leave:{opacity:0},
      })
  return (
    <IconContext.Provider
        value={{
          size: props.size,
          color: props.color,
          className: "roll-out",
        }}
      >
        <div
          className="test3"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {React.createElement(props.icon)}
          {transition((style,item)=>
          item?<animated.a style={style} key={props.text} className="test">{props.text}</animated.a>:''
          )}
        </div>
      </IconContext.Provider>
  )
}
