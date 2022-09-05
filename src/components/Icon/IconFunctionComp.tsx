import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { IconContext } from "react-icons";
import { is } from "@react-spring/shared";
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

export const IconFunctionComp = (props: IconProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "100%", padding: "0px" },
  });
  const elo = React.createElement(props.icon);
  const sleep = (milliseconds:number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const textRef:any=React.createRef()
  return (
    <IconContext.Provider
      value={{
        size: props.size,
        color: props.color,
        className: "obraz",
      }}
    >
      <div
        className={isVisible ? "showed" : " test3"}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => {
          sleep(100).then(r=>{setIsVisible(false)});
          console.log(textRef.current.offsetWidth)
          
          
        }}
      >
        {React.createElement(props.icon)}
        {transition((style, item) =>
          item ? (
            <animated.a style={style} ref={textRef} className="text">
              {props.text}
            </animated.a>
          ) : (
            ""
          )
        )}
      </div>
    </IconContext.Provider>
  );
};
