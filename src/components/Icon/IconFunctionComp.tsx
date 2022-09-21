//React imports
import React from "react";
import { useState } from "react";
//additional libs imports
import { motion } from "framer-motion";
import { useTransition, animated } from "react-spring";
import { IconContext } from "react-icons";
//Css import
import "./Icon.css";
//our props interface, propably should be moved out of our component
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

  // useTransition is hook from react-spring, we call it everytime component is mounting or unmounting
  // with this we can create cool looking animation
  const transition = useTransition(isVisible, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%", padding: "0px" },
  });

  /**
   * The function takes a string as an argument and returns the length of the longest word in the string
   * @param {string} str - string
   * @returns The length of the longest word in the string.
   */
  const findLongestWord = (str: string): number => {
    var longestWord = str
      .split(" ")
      .reduce(function (longest: string, currentWord: string) {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "");
    return longestWord.length;
  };

  /* It's a constant that is used to store the class name for the component. */
  const compConstClassName: string = "textConst";

  return (
    <IconContext.Provider
      value={{
        size: props.size,
        color: props.color,
        className: "icon",
      }}
    >
      {props.onHover ? (
        <motion.div
          style={{ minWidth: props.size }}
          animate={{
            width: isVisible
              ? `calc(${findLongestWord(props.text!)}em + ${props.size}px - ${
                  findLongestWord(props.text!) * 0.33
                }em)`
              : `${props.size}px`,
          }}
          className={
            isVisible
              ? `${compConstClassName} showed`
              : `${compConstClassName} hiden`
          }
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {React.createElement(props.icon)}
          {transition((style, item) =>
            item ? (
              <animated.a style={style} className="text">
                {props.text}
              </animated.a>
            ) : (
              ""
            )
          )}
        </motion.div>
      ) : (
        <motion.div
          style={{ minWidth: props.size }}
          // whileTap={{ y: "0%" }}
          // animate={ isVisible? {y:"-20%"}:{}}
          className={compConstClassName}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {React.createElement(props.icon)}

          <a className="text">{props.text}</a>
        </motion.div>
      )}
    </IconContext.Provider>
  );
};
