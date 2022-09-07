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
  // arrow function used to determinate longest word in our string we display so we can
  // set our width based on our font, working also with mobile phones
  // this function returns word length as a number
  const findLongestWord = (str: string): number => {
    var longestWord = str
      .split(" ")
      .reduce(function (longest: string, currentWord: string) {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "");
    return longestWord.length;
  };
  // const used to store classname for our component 
  // it's easier to change one const than writing 2 times same classnames
  const compConstClassName: string = "textConst";

  return (
    // IconContext.Provider is used to set our react-icons icon value e.g size or color
    // if we are going to change our icons api then we need to use diffrent provider
    <IconContext.Provider
      value={{
        size: props.size,
        color: props.color,
        className: "icon",
      }}
    >
      {/* Motion.div comes from framer-motion and with this lib we can create beautiful animations in snap of a finger via animate atribute  */}
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
            ? `${compConstClassName} showed`
            : `${compConstClassName} hiden`
        }
        // we use this event listners to set our text visibility 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {/* \/ we create our icon from props, still looking for better solution  */}
        {React.createElement(props.icon)}
        {transition((style, item) =>
          item ? (
            //animate comes from react-spring and it is used by our useTransition hook
            <animated.a style={style} className="text">
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
