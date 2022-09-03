import React, { Component } from "react";
import { IconContext } from "react-icons";
import {useTransition,animated} from "react-spring"

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

export default class Icon extends Component<IconProps, any> {
  state = {
    showIcon: false,
  };

  render() {
    console.log(typeof this.props.icon);
    
    // const transition = useTransition(this.state.showIcon,{
    //   from:{opacity:0},
    //   enter:{opacity:1},
    //   leave:{opacity:0},
    // })
    return (
      
      <IconContext.Provider
        value={{
          size: this.props.size,
          color: this.props.color,
          className: this.props.className,
        }}
      >
        <div
          className="test3"
          onMouseEnter={() => this.setState({ showIcon: true })}
          onMouseLeave={() => this.setState({ showIcon: false })}
        >
          {React.createElement(this.props.icon)}
          {this.state.showIcon && <a className={"test"}>{this.props.text}</a>}
         
        </div>
      </IconContext.Provider>
    );
  }
}
