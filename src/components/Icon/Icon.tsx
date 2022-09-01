
import React, { Component } from 'react'
interface IconProps{
  size: number;
  color: string;
  width?: number;
  height?: number;
  orientation?: string;
  text?: string;
  onHover?: boolean;
}

export default class Icon extends Component<IconProps,any> {
    
    render() {
    console.log(this.props.width)
       
      return (
        <div>
          size: {this.props.size} color: {this.props.color}  {this.props.width!==undefined? <>width: {this.props.width}</> : null }
          
        </div>
       
      )
  }
}
