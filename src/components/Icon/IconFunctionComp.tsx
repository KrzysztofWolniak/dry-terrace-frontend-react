import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { IconContext } from "react-icons";
import { is } from "@react-spring/shared";
import "./Icon.css";
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
  // UseState, isVisable is our only state in this component, we use it to change
  //our text visibility
  const [isVisible, setIsVisible] = useState(false);

  const transition = useTransition(isVisible, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "100%", padding: "0px" },
  });

  const findLongestWord = (str: string) => {
    var longestWord = str
      .split(" ")
      .reduce(function (longest: string, currentWord: string) {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "");
    return longestWord.length;
  };

  const textRef: any = React.createRef();
  const iconConstClassName: string = "textConst";

  return (
    <IconContext.Provider
      value={{
        size: props.size,
        color: props.color,
        className: "obraz",
      }}
    >
      <motion.div
        style={{ minWidth: props.size }}
        animate={{
          width: isVisible
            ? `calc(${findLongestWord(props.text!)}em + ${props.size}px - ${
                findLongestWord(props.text!) * 0.33
              }em)`
            : "48px",
        }}
        className={
          isVisible
            ? `${iconConstClassName} showed`
            : `${iconConstClassName} hiden`
        }
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
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
      </motion.div>
    </IconContext.Provider>
  );
};
