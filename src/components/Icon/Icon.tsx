
import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'
import { IconContext } from "react-icons";

interface IconProps{
  icon:IconType;
  size: string;
  color: string;
  className?:string;
  orientation?: string;
  text?: string;
  onHover?: boolean;
}

type IconType = (props:IconProps)=>JSX.Element

export default class Icon extends Component<IconProps,any> {
    
    render() {
    console.log(typeof this.props.icon)
       
      return (
        <IconContext.Provider value={{size:this.props.size, color:this.props.color, className:this.props.className  }}>

        <div className='test3'>
          {React.createElement(this.props.icon )}
          <a className='test'>{this.props.text}</a>
        </div>
        </IconContext.Provider>
       
      )
  }
}
